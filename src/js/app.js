const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from JavaScript API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JavaScript API server running on port ${PORT}`);
}); 