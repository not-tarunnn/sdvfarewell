// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (index.html, css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
