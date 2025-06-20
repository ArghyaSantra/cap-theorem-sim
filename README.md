# CAP Theorem Simulator

A Node.js project demonstrating the CAP (Consistency, Availability, Partition tolerance) theorem through simulation of different distributed system scenarios.

## Project Structure

```
cap-theorem-sim/
├── src/
│   ├── config/             # App-level configs
│   ├── controllers/        # API endpoint logic
│   ├── services/           # Core CAP simulation logic
│   ├── middleware/         # Error handler, request logger
│   ├── routes/             # Route definitions
│   ├── models/             # Request/response models or states
│   └── utils/              # Helpers, e.g., simulate delay, logger
├── Dockerfile
├── docker-compose.yml
├── .env
├── .eslintrc.js
├── .prettierrc
├── .github/workflows/
│   └── ci.yml              # GitHub Actions for CI
├── app.js
└── package.json
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```

## Features
- CAP theorem simulation scenarios
- Docker containerization
- CI/CD pipeline
- Code quality tools (ESLint, Prettier)

## License
MIT 