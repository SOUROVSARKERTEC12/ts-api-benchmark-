# 🚀 API Load Testing with TypeScript

A high-performance API load testing project using TypeScript, Express, and Autocannon.

## ✨ Features

- ⚡ Express server with TypeScript
- 📊 Load testing with Autocannon
- 🔄 Real-time progress tracking
- 📈 Detailed performance metrics
- 🎯 Easy to use and configure

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/SOUROVSARKERTEC12/ts-api-benchmark-.git

# Navigate to project directory
cd ts-api-benchmark

# Install dependencies
yarn install
```

## 🚀 Usage

### Start the Server

```bash
yarn dev
```

### Run Load Tests

```bash
yarn test
```

The load test will:
- 🔌 Create 10 concurrent connections
- ⏱️ Run for 10 seconds
- 📡 Make GET requests to the server
- 📊 Display real-time progress and results

## 📁 Project Structure

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

## 📊 Performance Metrics

- Requests per second
- Latency statistics
- Error rates
- Throughput analysis
- Real-time progress tracking

## 📈 Load Test Results

Here's the actual output from running the load test:

```bash
$ yarn test
Running 10s test @ http://localhost:3000
10 connections


┌─────────┬──────┬──────┬───────┬──────┬──────┬───────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg  │ Stdev │ Max  │
├─────────┼──────┼──────┼───────┼──────┼──────┼───────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │
└─────────┴──────┴──────┴───────┴──────┴──────┴───────┴──────┘
┌───────────┬─────┬──────┬─────┬───────┬─────┬───────┬─────┐
│ Stat      │ 1%  │ 2.5% │ 50% │ 97.5% │ Avg │ Stdev │ Min │
├───────────┼─────┼──────┼─────┼───────┼─────┼───────┼─────┤
│ Req/Sec   │ 0   │ 0    │ 0   │ 0     │ 0   │ 0     │ 0   │
├───────────┼─────┼──────┼─────┼───────┼─────┼───────┼─────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 0 B │ 0 B   │ 0 B │ 0 B   │ 0 B │
└───────────┴─────┴──────┴─────┴───────┴─────┴───────┴─────┘

Req/Bytes counts sampled once per second.
# of samples: 10

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 0            │
├────────────┼──────────────┤
│ 0.01       │ 0            │
├────────────┼──────────────┤
│ 0.1        │ 0            │
├────────────┼──────────────┤
│ 1          │ 0            │
├────────────┼──────────────┤
│ 2.5        │ 0            │
├────────────┼──────────────┤
│ 10         │ 0            │
├────────────┼──────────────┤
│ 25         │ 0            │
├────────────┼──────────────┤
│ 50         │ 0            │
├────────────┼──────────────┤
│ 75         │ 0            │
├────────────┼──────────────┤
│ 90         │ 0            │
├────────────┼──────────────┤
│ 99.999     │ 0            │
└────────────┴──────────────┘

18k requests in 10.07s, 0 B read
18k errors (0 timeouts)
✅ Load test completed.
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

Made with ❤️ by [SOUROVSARKERTEC12](https://github.com/SOUROVSARKERTEC12) 