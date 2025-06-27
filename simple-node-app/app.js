// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World from Node.js and Express!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


