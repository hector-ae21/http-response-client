# Contributing to http-response-client

Thank you for your interest in contributing to http-response-client! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/http-response-client.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m "Add your feature"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Create a Pull Request

## Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm (comes with Node.js)

### Installation
```bash
npm install
```

### Building the Project
```bash
npm run build
```

This will compile the TypeScript files to JavaScript and generate type definitions in the `lib/` directory.

### Project Structure
```
http-response-client/
├── src/                      # TypeScript source files
│   ├── index.ts             # Main entry point
│   ├── errors/              # Error classes
│   │   ├── client/          # 4xx client errors
│   │   ├── server/          # 5xx server errors
│   │   └── redirects/       # 3xx redirect responses
│   └── middlewares/         # Express middleware
├── types/                   # Type definitions
├── lib/                     # Compiled JavaScript (generated)
└── .github/workflows/       # CI/CD workflows
```

## Coding Guidelines

### TypeScript
- Use TypeScript for all new code
- Follow the existing code style
- Add type definitions for all public APIs
- Use ES modules (import/export)

### Naming Conventions
- Classes: PascalCase (e.g., `NotFoundError`)
- Functions: camelCase (e.g., `createError`)
- Files: kebab-case (e.g., `not-found.ts`)

### Error Classes
When adding new error classes:
1. Create the error file in the appropriate directory (`client/`, `server/`, or `redirects/`)
2. Extend the `DefaultError` class
3. Export the error from the index file
4. Update the documentation

Example:
```typescript
import DefaultError from "../default-error";

export default class NotFoundError extends DefaultError {
    constructor(message?: string) {
        super(404, message || "Not Found");
        this.name = "NotFoundError";
    }
}
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the CHANGELOG.md following the existing format
3. Ensure the build passes: `npm run build`
4. The PR will be reviewed by maintainers
5. Once approved, it will be merged

## CI/CD Pipeline

When changes are pushed to the `master` branch, the automated publishing workflow will:
- Build the TypeScript project
- Check if the version is new
- Create a git tag for the version
- Publish to npm automatically

**Note**: Make sure to manually build and test your changes locally before pushing to master.

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version: Incompatible API changes
- **MINOR** version: Backward-compatible functionality additions
- **PATCH** version: Backward-compatible bug fixes

## Releasing

Releases are automated through GitHub Actions:
1. Update the version in `package.json`
2. Update the `CHANGELOG.md` with the new version
3. Commit and push to the `master` branch
4. The CI/CD pipeline will automatically:
   - Create a git tag
   - Build the package
   - Publish to npm (if the version is new and changes were made to `src/` or `types/`)

## Questions?

If you have any questions, please:
- Open an issue with the "question" label
- Check existing issues for similar questions
- Review the README.md documentation

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all.

### Our Standards
- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

Thank you for contributing to http-response-client! 🎉

