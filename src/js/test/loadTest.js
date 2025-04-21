const autocannon = require('autocannon');

// Create and run the load test
const instance = autocannon({
  url: 'http://localhost:3000',
  duration: 10,
  connections: 10,
  requests: [
    {
      method: 'GET',
      path: '/'
    }
  ]
}, finishedBench);

function finishedBench(err, res) {
  if (err) {
    console.error('❌ Load test failed:', err);
    return;
  }
  console.log('✅ Load test completed.');
}

// Pipe output to console to get the nice formatted table
autocannon.track(instance, {
  renderProgressBar: true,
  renderResultsTable: true,
  renderLatencyTable: true
}); 