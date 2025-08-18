#!/bin/bash

# Build script for Strapi + Next.js deployment
set -e

echo "🚀 Starting build process..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t strapi-nextjs-app .

echo "✅ Build completed successfully!"

# Provide usage instructions
echo ""
echo "🎉 Your application is ready to deploy!"
echo ""
echo "To run locally:"
echo "  docker run -p 1337:1337 strapi-nextjs-app"
echo ""
echo "To run with Docker Compose:"
echo "  docker-compose up"
echo ""
echo "To push to a registry (replace with your registry):"
echo "  docker tag strapi-nextjs-app your-registry.com/strapi-nextjs-app:latest"
echo "  docker push your-registry.com/strapi-nextjs-app:latest"
