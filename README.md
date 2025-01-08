<br />
<div align="center">
  <img src=".github/readme.webp" />
</div>

# Packages Monorepo

[![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)](https://nx.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![GitHub Packages](https://img.shields.io/badge/GitHub%20Packages-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/features/packages)

My monorepo for managing multiple TypeScript packages using Nx. Packages are automatically built, tested, and published to GitHub Packages when a new release is created.

## 📦 Packages

- `@jameshusband/helloworld` - Hello World package


## 🛠️ Tech Stack

- **Build System**: Nx
- **Language**: TypeScript
- **Package Registry**: GitHub Packages
- **CI/CD**: GitHub Actions
- **Testing**: Jest
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- GitHub account with access to GitHub Packages

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd packages
   ```

2. Install dependencies:
   ```bash
   make install
   ```

### Development Commands

The project uses a Makefile for common operations:

```bash
make help         # Show available commands
make install      # Install dependencies
make clean        # Clean build artifacts
make build        # Build all packages
make test         # Run tests
make lint         # Run linting
make publish-dry  # Show what would be published
make publish      # Publish packages to GitHub Packages
```

## 📦 Publishing Packages

1. Make your changes to the packages

2. Run a dry-run to see what would be published:
   ```bash
   make publish-dry
   ```

3. Create a new release in GitHub with an appropriate version tag (e.g., v0.1.0)

4. The GitHub Action will automatically:
   - Build affected packages
   - Run tests
   - Publish changed packages to GitHub Packages

## 🔧 Configuration

- `nx.json` - Nx workspace configuration
- `.github/workflows/publish.yml` - GitHub Actions workflow for package publishing
- `project.json` - Individual package configurations

## 📝 License

[MIT](LICENSE)
