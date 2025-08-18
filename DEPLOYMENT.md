# Deployment Guide

This guide will help you deploy your Strapi + Next.js application and fix the `better-sqlite3` compilation issues.

## Problem Analysis

The error you encountered is caused by:
1. **Missing Python**: `better-sqlite3` requires Python for native compilation
2. **Missing build tools**: Native modules need `make`, `g++`, and other build dependencies
3. **Alpine Linux compatibility**: Some native modules need specific libraries for Alpine Linux

## Solution

### 1. Docker Configuration

I've created a multi-stage Dockerfile that:
- Uses Node.js 18 (more compatible with Strapi 5.x)
- Installs all required build dependencies (Python, make, g++, etc.)
- Uses multi-stage builds for optimization
- Includes proper security (non-root user)
- Handles both Strapi and Next.js builds

### 2. Key Features

**Build Dependencies:**
```dockerfile
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat \
    vips-dev \
    sqlite
```

**Multi-stage optimization:**
- Separate stages for dependencies, builds, and production
- Smaller final image size
- Better caching

**Security:**
- Non-root user execution
- Proper file permissions

## Deployment Options

### Option 1: Docker Build

```bash
# Build the image
./build.sh

# Or manually:
docker build -t strapi-nextjs-app .

# Run locally
docker run -p 1337:1337 strapi-nextjs-app
```

### Option 2: Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

### Option 3: Cloud Deployment

For cloud platforms (AWS, GCP, Azure), use the Dockerfile with:

1. **Environment Variables:**
   ```bash
   NODE_ENV=production
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   # Add your JWT secrets, etc.
   ```

2. **Volume Mounts:**
   ```bash
   # For persistent SQLite database
   -v /host/data:/app/server/.tmp
   ```

## Production Recommendations

### 1. Use PostgreSQL for Production

Replace SQLite with PostgreSQL for better performance and scalability:

```env
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:password@host:5432/database
```

### 2. Environment Security

- Never commit `.env` files
- Use secrets management (AWS Secrets Manager, etc.)
- Generate strong JWT secrets

### 3. Monitoring

Add health checks and monitoring:
```bash
# Health check endpoint
curl http://localhost:1337/admin
```

## Troubleshooting

### Common Issues:

1. **Build timeout**: Increase Docker build timeout
2. **Memory issues**: Increase Docker memory limits
3. **Permission errors**: Ensure proper file ownership

### Debug Commands:

```bash
# Check build logs
docker build --no-cache -t strapi-nextjs-app .

# Interactive debugging
docker run -it --entrypoint /bin/sh strapi-nextjs-app

# Check dependencies
docker run strapi-nextjs-app node -e "console.log(process.versions)"
```

## Next Steps

1. Test the build locally with `./build.sh`
2. Configure your environment variables
3. Deploy to your preferred platform
4. Set up monitoring and backups

## Support

If you encounter issues:
1. Check Docker logs: `docker logs <container-id>`
2. Verify environment variables
3. Test locally first before deploying
4. Consider using PostgreSQL for production
