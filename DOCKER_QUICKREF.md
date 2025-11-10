# Docker Quick Reference

## Quick Start Commands

### Build and Run (Docker Compose)
```bash
# Production
docker-compose up -d

# Development (with hot-reload)
docker-compose --profile development up dev
```

### Build and Run (Docker CLI)
```bash
# Build
docker build -t ditronics-landing-page:latest .

# Run (host port 7800 -> container port 3000)
docker run -d --name ditronics-app -p 7800:3000 ditronics-landing-page:latest
```

### Access Application
```
http://localhost:7800
```

## Common Commands

### Viewing Logs
```bash
# Docker Compose
docker-compose logs -f

# Docker CLI
docker logs -f ditronics-app
```

### Stop and Remove
```bash
# Docker Compose
docker-compose down

# Docker CLI
docker stop ditronics-app
docker rm ditronics-app
# Or combined: docker rm -f ditronics-app
```

### Check Status
```bash
# List running containers
docker ps

# Check health
docker inspect --format='{{.State.Health.Status}}' ditronics-app
```

### Rebuild
```bash
# Docker Compose
docker-compose up -d --build

# Docker CLI
docker build -t ditronics-landing-page:latest .
docker rm -f ditronics-app
docker run -d --name ditronics-app -p 7800:3000 ditronics-landing-page:latest
```

## Configuration Details

| Setting | Value |
|---------|-------|
| **Container Port** | 3000 |
| **Host Port** | 7800 |
| **Base Image** | node:20-alpine |
| **Expected Image Size** | 150-180MB |
| **User** | nextjs (UID 1001) |
| **Health Check** | Every 30s |

## File Structure

```
.
├── Dockerfile              # Production multi-stage build
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Orchestration config
├── .dockerignore          # Files to exclude
├── .npmrc                 # NPM configuration
├── DOCKER.md              # Comprehensive guide
├── BUILD_GUIDE.md         # Step-by-step instructions
└── README.md              # This file
```

## For More Details

- **Comprehensive Guide:** See [DOCKER.md](./DOCKER.md)
- **Step-by-Step Build:** See [BUILD_GUIDE.md](./BUILD_GUIDE.md)
