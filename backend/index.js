const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let items = [];

// Endpoint to fetch all marketplace items
app.get('/api/marketplace', (req, res) => {
  res.json(items);
});

// Endpoint to add a new item to the marketplace
app.post('/api/marketplace', (req, res) => {
  const newItem = {
    name: req.body.name,
    price: req.body.price,
  };
  items.push(newItem);
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
