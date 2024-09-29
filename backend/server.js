const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(express.json());

// Marketplace API route
app.get('/api/marketplace', (req, res) => {
  const sampleItems = [
    { id: 1, name: 'Bread', price: 1.00 },
    { id: 2, name: 'Milk', price: 0.50 },
    { id: 3, name: 'Fruits', price: 2.00 }
  ];
  res.json(sampleItems);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const WOLFRAM_APP_ID = 'swaritsrivastava22@gmail.com';  // Replace with your Wolfram app ID

app.get('/api/demand-prediction', async (req, res) => {
  try {
    const query = 'predict food demand based on ...';  // Wolfram query
    const response = await axios.get(`http://api.wolframalpha.com/v2/query?input=${encodeURIComponent(query)}&appid=${WOLFRAM_APP_ID}`);
    
    // Process the response from Wolfram
    const data = response.data;
    res.json({ prediction: data });
  } catch (error) {
    res.status(500).send('Error with Wolfram API');
  }
  const cors = require('cors');
  app.use(cors());
  
});
