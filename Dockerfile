# Use a more stable Node.js base image
FROM node:18-bullseye-slim

# Install system dependencies required for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    build-essential \
    libvips-dev \
    sqlite3 \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Create app user for security
RUN groupadd --gid 1001 nodejs \
    && useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home strapi

# Copy and install server dependencies
WORKDIR /app/server
COPY server/package*.json server/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Copy server source and build
COPY server/ .
RUN yarn build

# Copy and install client dependencies
WORKDIR /app/client
COPY client/package*.json client/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Copy client source and build
COPY client/ .
RUN yarn build

# Set working directory back to app root
WORKDIR /app

# Copy other necessary files
COPY copy-env.mts ./

# Create data directory for SQLite database
RUN mkdir -p /app/server/.tmp && chown -R strapi:nodejs /app/server/.tmp

# Change ownership of all app files
RUN chown -R strapi:nodejs /app

# Switch to non-root user
USER strapi

# Set environment variables
ENV NODE_ENV=production
ENV PORT=1337
ENV DATABASE_CLIENT=sqlite
ENV DATABASE_FILENAME=.tmp/data.db

# Expose port
EXPOSE 1337

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:1337/admin || exit 1

# Start Strapi
CMD ["sh", "-c", "cd server && yarn start"]
