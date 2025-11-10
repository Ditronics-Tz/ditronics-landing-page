# Ditronics Landing Page

A modern Next.js landing page for Ditronics - Technology & Digital Production Services.

## 🚀 Quick Start

### Development
```bash
npm install --legacy-peer-deps
npm run dev
```

Visit `http://localhost:3000`

### Production
```bash
npm install --legacy-peer-deps
npm run build
npm start
```

## 🐳 Docker Deployment

This project includes a complete Docker configuration for production deployment.

### Quick Start with Docker

```bash
# Using Docker Compose (Recommended)
docker-compose up -d

# Using Docker CLI
docker build -t ditronics-landing-page .
docker run -d -p 7800:3000 ditronics-landing-page
```

Access at: **http://localhost:7800**

### Docker Documentation

- **[DOCKER_QUICKREF.md](./DOCKER_QUICKREF.md)** - Quick reference for common commands
- **[BUILD_GUIDE.md](./BUILD_GUIDE.md)** - Step-by-step build and run instructions
- **[DOCKER.md](./DOCKER.md)** - Comprehensive Docker documentation
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Requirements validation

### Docker Features

✅ **Slim Image:** Under 200MB (150-180MB actual)  
✅ **Multi-stage Build:** Optimized for production  
✅ **Security:** Non-root user (nextjs:1001)  
✅ **Health Checks:** Built-in monitoring  
✅ **Hot-Reload:** Development mode support  
✅ **Port Mapping:** 7800 (host) → 3000 (container)  

## 📦 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
.
├── app/                  # Next.js app directory
├── components/           # React components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
├── styles/              # Global styles
├── Dockerfile           # Production Docker build
├── Dockerfile.dev       # Development Docker build
├── docker-compose.yml   # Docker orchestration
└── next.config.mjs      # Next.js configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

### NPM Configuration

The project uses legacy peer deps to handle dependency conflicts:

```bash
npm config set legacy-peer-deps true
```

Or use the included `.npmrc` file (already configured).

## 🐛 Troubleshooting

### Dependency Issues

If you encounter peer dependency conflicts:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Build Issues

For Google Fonts fetch errors (in restricted networks):

1. Ensure internet access during build
2. Or configure Next.js to use local fonts

### Docker Issues

See [BUILD_GUIDE.md](./BUILD_GUIDE.md) for comprehensive troubleshooting.

## 📝 License

This project is private and proprietary to Ditronics.

## 🤝 Contributing

Contact the Ditronics team for contribution guidelines.

## 📧 Contact

For support or inquiries, please contact Ditronics.
