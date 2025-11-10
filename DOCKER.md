# Docker Deployment Guide

This guide provides complete instructions for building and running the Ditronics Landing Page using Docker.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

### Using Docker Compose (Recommended)

**Production Mode:**
```bash
# Build and start the production container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

**Development Mode (with hot-reloading):**
```bash
# Start development environment
docker-compose --profile development up dev

# Stop development environment
docker-compose --profile development down
```

### Using Docker CLI

**Build the Docker image:**
```bash
docker build -t ditronics-landing-page:latest .
```

**Run the container (mapping to port 7800):**
```bash
docker run -d \
  --name ditronics-app \
  -p 7800:3000 \
  --restart unless-stopped \
  ditronics-landing-page:latest
```

**View container logs:**
```bash
docker logs -f ditronics-app
```

**Stop and remove the container:**
```bash
docker stop ditronics-app
docker rm ditronics-app
```

## Access the Application

Once the container is running, access the application at:
- **Production:** http://localhost:7800
- **Development:** http://localhost:7800

## Docker Image Details

### Multi-Stage Build

The Dockerfile uses a three-stage build process:

1. **Dependencies Stage**: Installs npm dependencies
2. **Builder Stage**: Builds the Next.js application
3. **Runner Stage**: Creates minimal production runtime image

### Image Size Optimization

- Uses `node:20-alpine` base images (minimal footprint)
- Multi-stage build eliminates build dependencies from final image
- Next.js standalone output reduces final bundle size
- Expected final image size: ~150-180MB

### Security Features

- Runs as non-root user (`nextjs` user with UID 1001)
- Minimal attack surface using Alpine Linux
- Health checks for container orchestration
- No unnecessary build tools in production image

## Configuration

### Environment Variables

You can customize the application using environment variables:

```bash
# Example with custom environment variables
docker run -d \
  -p 7800:3000 \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  ditronics-landing-page:latest
```

### Port Configuration

- **Internal Port:** 3000 (container)
- **External Port:** 7800 (host)

To use a different external port:
```bash
docker run -d -p 8080:3000 ditronics-landing-page:latest
```

## Development Workflow

### Hot-Reloading in Development

The development setup mounts source code as volumes for instant updates:

```bash
# Start dev server with hot-reload
docker-compose --profile development up dev
```

Files that trigger hot-reload:
- `/app/*`
- `/components/*`
- `/hooks/*`
- `/lib/*`
- `/public/*`
- `/styles/*`

## Troubleshooting

### Build Issues

**Problem:** npm install fails
```bash
# Clean build without cache
docker build --no-cache -t ditronics-landing-page:latest .
```

**Problem:** Google Fonts fetch errors
- Ensure the build environment has internet access
- Alternatively, configure Next.js to use local fonts

### Runtime Issues

**Problem:** Container won't start
```bash
# Check container logs
docker logs ditronics-app

# Inspect container
docker inspect ditronics-app
```

**Problem:** Health check failing
```bash
# Check health status
docker inspect --format='{{json .State.Health}}' ditronics-app
```

### Port Conflicts

If port 7800 is already in use:
```bash
# Find process using the port
lsof -i :7800  # macOS/Linux
netstat -ano | findstr :7800  # Windows

# Use a different port
docker run -d -p 8080:3000 ditronics-landing-page:latest
```

## Advanced Usage

### Docker Compose with Custom Overrides

Create a `docker-compose.override.yml` for local customizations:

```yaml
version: '3.8'
services:
  app:
    ports:
      - "8080:3000"
    environment:
      - CUSTOM_VAR=value
```

### Building for Different Platforms

```bash
# Build for ARM64 (Apple Silicon)
docker buildx build --platform linux/arm64 -t ditronics-landing-page:arm64 .

# Build for AMD64 (Intel/AMD)
docker buildx build --platform linux/amd64 -t ditronics-landing-page:amd64 .

# Multi-platform build
docker buildx build --platform linux/amd64,linux/arm64 -t ditronics-landing-page:multi .
```

### Production Deployment

For production environments, consider:

1. **Using Docker Compose in Production:**
```bash
docker-compose -f docker-compose.yml up -d
```

2. **Resource Limits:**
```bash
docker run -d \
  -p 7800:3000 \
  --memory="512m" \
  --cpus="1.0" \
  ditronics-landing-page:latest
```

3. **Health Monitoring:**
The container includes health checks that can be used with orchestration tools like Kubernetes or Docker Swarm.

## Maintenance

### Update the Application

```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build

# Or with Docker CLI
docker build -t ditronics-landing-page:latest .
docker stop ditronics-app
docker rm ditronics-app
docker run -d --name ditronics-app -p 7800:3000 ditronics-landing-page:latest
```

### Cleanup

```bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove all unused Docker resources
docker system prune -a
```

## Support

For issues or questions, please check:
- Container logs: `docker logs ditronics-app`
- Build logs: `docker build -t ditronics-landing-page:latest .`
- Next.js documentation: https://nextjs.org/docs
