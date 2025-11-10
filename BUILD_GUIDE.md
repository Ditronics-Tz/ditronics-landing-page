# Docker Build and Run Instructions

Complete step-by-step guide for building and running the Ditronics Landing Page with Docker.

## Prerequisites

Before you begin, ensure you have:
- Docker Engine 20.10+ installed
- Docker Compose 2.0+ installed
- Internet access for downloading dependencies and Google Fonts

## Step-by-Step Instructions

### Option 1: Using Docker Compose (Recommended)

#### Production Build and Run

1. **Navigate to the project directory:**
   ```bash
   cd /path/to/ditronics-landing-page
   ```

2. **Build and start the production container:**
   ```bash
   docker-compose up -d --build
   ```
   This command will:
   - Build the Docker image using the multi-stage Dockerfile
   - Start the container in detached mode
   - Map port 7800 (host) to port 3000 (container)

3. **Verify the container is running:**
   ```bash
   docker-compose ps
   ```

4. **View container logs:**
   ```bash
   docker-compose logs -f app
   ```
   Press `Ctrl+C` to stop following logs.

5. **Access the application:**
   Open your browser and navigate to: `http://localhost:7800`

6. **Stop the container:**
   ```bash
   docker-compose down
   ```

#### Development Build and Run (with Hot-Reload)

1. **Start the development environment:**
   ```bash
   docker-compose --profile development up dev
   ```

2. **Make code changes:**
   Any changes to the following directories will trigger hot-reload:
   - `/app`
   - `/components`
   - `/hooks`
   - `/lib`
   - `/public`
   - `/styles`

3. **Stop the development environment:**
   ```bash
   docker-compose --profile development down
   ```

### Option 2: Using Docker CLI

#### Build the Image

1. **Build the Docker image:**
   ```bash
   docker build -t ditronics-landing-page:latest .
   ```
   
   Expected output:
   - Stage 1: Installing dependencies (~2-3 minutes)
   - Stage 2: Building Next.js app (~3-5 minutes)
   - Stage 3: Creating production image (~1 minute)
   - **Total build time:** ~6-9 minutes (first build)

2. **Verify the image was created:**
   ```bash
   docker images | grep ditronics-landing-page
   ```
   
   Expected size: **~150-180MB** (well under the 200MB target)

#### Run the Container

1. **Run the container (mapping to port 7800):**
   ```bash
   docker run -d \
     --name ditronics-app \
     -p 7800:3000 \
     --restart unless-stopped \
     ditronics-landing-page:latest
   ```
   
   Explanation of flags:
   - `-d`: Run in detached mode (background)
   - `--name ditronics-app`: Give the container a friendly name
   - `-p 7800:3000`: Map host port 7800 to container port 3000
   - `--restart unless-stopped`: Auto-restart on failure
   - `ditronics-landing-page:latest`: The image to run

2. **Verify the container is running:**
   ```bash
   docker ps | grep ditronics-app
   ```

3. **Check container health:**
   ```bash
   docker inspect --format='{{.State.Health.Status}}' ditronics-app
   ```
   Should show: `healthy` (after ~40 seconds)

4. **View container logs:**
   ```bash
   docker logs -f ditronics-app
   ```
   
   Expected output:
   ```
   ready - started server on 0.0.0.0:3000, url: http://localhost:3000
   ```

5. **Access the application:**
   Open browser: `http://localhost:7800`

#### Stop and Remove the Container

1. **Stop the container:**
   ```bash
   docker stop ditronics-app
   ```

2. **Remove the container:**
   ```bash
   docker rm ditronics-app
   ```

3. **Or do both in one command:**
   ```bash
   docker rm -f ditronics-app
   ```

## Advanced Docker Commands

### Building with Custom Tags

```bash
# Build with version tag
docker build -t ditronics-landing-page:v1.0.0 .

# Build with multiple tags
docker build -t ditronics-landing-page:latest -t ditronics-landing-page:v1.0.0 .
```

### Running with Environment Variables

```bash
docker run -d \
  --name ditronics-app \
  -p 7800:3000 \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  ditronics-landing-page:latest
```

### Running with Resource Limits

```bash
docker run -d \
  --name ditronics-app \
  -p 7800:3000 \
  --memory="512m" \
  --cpus="1.0" \
  ditronics-landing-page:latest
```

### Executing Commands Inside the Container

```bash
# Open a shell inside the container
docker exec -it ditronics-app sh

# Run a specific command
docker exec ditronics-app node -v
```

### Inspecting the Container

```bash
# View full container details
docker inspect ditronics-app

# View logs with timestamps
docker logs --timestamps ditronics-app

# View last 100 log lines
docker logs --tail 100 ditronics-app
```

## Using Different Ports

To map to a different host port (e.g., 8080 instead of 7800):

**Docker Compose:**
Edit `docker-compose.yml` and change:
```yaml
ports:
  - "8080:3000"  # Changed from 7800:3000
```

**Docker CLI:**
```bash
docker run -d --name ditronics-app -p 8080:3000 ditronics-landing-page:latest
```

## Multi-Platform Builds

For building images that work on different architectures:

```bash
# Setup buildx (one-time setup)
docker buildx create --use

# Build for ARM64 (Apple Silicon)
docker buildx build --platform linux/arm64 -t ditronics-landing-page:arm64 .

# Build for AMD64 (Intel/AMD)
docker buildx build --platform linux/amd64 -t ditronics-landing-page:amd64 .

# Build for multiple platforms
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t ditronics-landing-page:multi-arch \
  --push \
  .
```

## Troubleshooting

### Issue: Build fails with "permission denied"

**Solution:** Ensure Docker daemon is running:
```bash
sudo systemctl start docker  # Linux
# or restart Docker Desktop on macOS/Windows
```

### Issue: Port 7800 already in use

**Solution:** Find and stop the process using the port:
```bash
# Linux/macOS
lsof -i :7800
kill -9 <PID>

# Windows
netstat -ano | findstr :7800
taskkill /PID <PID> /F

# Or use a different port
docker run -d -p 8080:3000 ditronics-landing-page:latest
```

### Issue: Google Fonts fetch errors during build

**Solution:** Ensure internet access during build, or configure Next.js to use local fonts.

### Issue: Container exits immediately

**Solution:** Check logs for errors:
```bash
docker logs ditronics-app
```

Common causes:
- Build failed (check build logs)
- Port already in use
- Insufficient memory

### Issue: Health check failing

**Solution:** 
```bash
# Check health status
docker inspect --format='{{json .State.Health}}' ditronics-app | jq

# Check if app is responding
curl http://localhost:7800
```

## Cleanup Commands

```bash
# Stop all containers
docker stop $(docker ps -q)

# Remove all stopped containers
docker container prune -f

# Remove unused images
docker image prune -a -f

# Remove all unused data
docker system prune -a --volumes -f

# Remove specific image
docker rmi ditronics-landing-page:latest
```

## Production Deployment Checklist

Before deploying to production:

- [ ] Build completes successfully without errors
- [ ] Container starts and health check passes
- [ ] Application accessible on configured port
- [ ] Image size is under 200MB
- [ ] Non-root user is active (verify with `docker exec ditronics-app whoami`)
- [ ] Health checks are working
- [ ] Logs show no errors
- [ ] Environment variables are properly set
- [ ] Restart policy is configured
- [ ] Resource limits are appropriate

## Performance Optimization

### Build Cache

Docker will cache layers. To ensure fresh build:
```bash
docker build --no-cache -t ditronics-landing-page:latest .
```

### Image Size Verification

```bash
# Check image size
docker images ditronics-landing-page:latest

# Analyze image layers
docker history ditronics-landing-page:latest
```

Target size: Under 200MB ✓

## Next Steps

After successful deployment:

1. **Set up monitoring:** Use Docker health checks or external monitoring
2. **Configure logging:** Integrate with logging solutions (ELK, Splunk, etc.)
3. **Implement CI/CD:** Automate builds with GitHub Actions, Jenkins, etc.
4. **Use orchestration:** Deploy with Kubernetes, Docker Swarm, or similar
5. **Add reverse proxy:** Use Nginx or Traefik for SSL/TLS and load balancing

## Support

For detailed documentation, see:
- [DOCKER.md](./DOCKER.md) - Comprehensive Docker guide
- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/)
