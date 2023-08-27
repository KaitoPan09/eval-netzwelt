const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for enabling CORS
app.use(express.json());
app.use(cors());

// Handles user auth
app.post('/', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const fetch = await import('node-fetch');

    console.log('Fetching SignIn...');

    // sending POST to external API
    const response = 
    await fetch.default('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log('Authentication response:', response.status);

    const responseData = response.ok ? await response.json() 
    : { error: "Authentication Failed "};
    const status = response.ok ? 200 : 401;

    console.log('Response to client...');

    res.status(status).json(responseData);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Error during login' });
  }
});

// Handles territories API
app.get('/fetch-territories', async (req, res) => {
  try {
    const fetch = await import('node-fetch');

    console.log('Fetching territories...');

    // sending GET to external API
    const response = 
    await fetch.default('https://netzwelt-devtest.azurewebsites.net/Territories/All');
    const data = await response.json();

    console.log('GET:', data); 

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});