const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});