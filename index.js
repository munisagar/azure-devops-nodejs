const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Azure DevOps!');
});

const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export app and server for testing purposes
module.exports = { app, server };
