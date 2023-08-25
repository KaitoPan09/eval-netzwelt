const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Use cors middleware to enable CORS for all routes
app.use(cors());

app.get('/fetch-territories', async (req, res) => {
  try {
    const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All');
    const data = await response.json();

    console.log('Fetched data from external API:', data); // Log the fetched data

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
