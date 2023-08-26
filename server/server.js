const express = require('express');
const cors = require('cors'); 
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/api', createProxyMiddleware({
  target: 'https://netzwelt-devtest.azurewebsites.net',
  changeOrigin: true,
  pathRewrite: {
      '^/api': '', 
  },
}));

const authenticationApiUrl = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
      const apiResponse = await fetch(authenticationApiUrl, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password })
      });

      if (apiResponse.ok) {
          res.status(200).json({ message: 'Login successful' });
      } else {
          res.status(401).json({ error: 'Invalid username or password' });
      }
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'An error occurred during login' });
  }
});

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
