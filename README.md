# API Load Testing with TypeScript

A simple API load testing project using TypeScript, Express, and Autocannon.

## Features

- Express server with TypeScript
- Load testing with Autocannon
- Real-time progress tracking
- Detailed performance metrics

## Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
yarn install
```

## Usage

### Start the Server

```bash
yarn dev
```

### Run Load Tests

```bash
yarn test
```

The load test will:
- Create 10 concurrent connections
- Run for 10 seconds
- Make GET requests to the server
- Display real-time progress and results

## Project Structure

```
├── src/
│   ├── app.ts          # Express server
│   ├── test/
│   │   └── loadTest.ts # Load testing configuration
│   └── types/
│       └── autocannon.d.ts # TypeScript type definitions
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT 