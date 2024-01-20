const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Mock data for simplicity
const mockData = {
  message: 'Hello from the server!',
  timestamp: new Date().toLocaleString()
};

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API endpoint for fetching data
app.get('/api/data', (req, res) => {
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
