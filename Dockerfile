# Multi-stage build for better optimization
FROM node:18-alpine AS base

# Install system dependencies required for native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat \
    vips-dev \
    sqlite

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json yarn.lock ./

# Server dependencies stage
FROM base AS server-deps
WORKDIR /app/server
COPY server/package*.json server/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Client dependencies stage  
FROM base AS client-deps
WORKDIR /app/client
COPY client/package*.json client/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Server build stage
FROM base AS server-build
WORKDIR /app/server
COPY --from=server-deps /app/server/node_modules ./node_modules
COPY server/ .
RUN yarn build

# Client build stage
FROM base AS client-build
WORKDIR /app/client
COPY --from=client-deps /app/client/node_modules ./node_modules
COPY client/ .
RUN yarn build

# Production image
FROM node:18-alpine AS production

# Install runtime dependencies
RUN apk add --no-cache \
    vips \
    sqlite

# Create app user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 strapi

WORKDIR /app

# Copy built server application
COPY --from=server-build --chown=strapi:nodejs /app/server/dist ./server/dist
COPY --from=server-build --chown=strapi:nodejs /app/server/node_modules ./server/node_modules
COPY --from=server-build --chown=strapi:nodejs /app/server/package*.json ./server/
COPY --from=server-build --chown=strapi:nodejs /app/server/public ./server/public
COPY --from=server-build --chown=strapi:nodejs /app/server/config ./server/config

# Copy built client application
COPY --from=client-build --chown=strapi:nodejs /app/client/.next ./client/.next
COPY --from=client-build --chown=strapi:nodejs /app/client/node_modules ./client/node_modules
COPY --from=client-build --chown=strapi:nodejs /app/client/package*.json ./client/
COPY --from=client-build --chown=strapi:nodejs /app/client/public ./client/public

# Copy other necessary files
COPY --chown=strapi:nodejs copy-env.mts ./

# Create data directory for SQLite database
RUN mkdir -p /app/server/.tmp && chown -R strapi:nodejs /app/server/.tmp

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
