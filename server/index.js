const express = require('express');
const fetch = require('cross-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const MOCK_API_URL = 'https://run.mocky.io/v3/5ab15ba4-fe75-4a4f-b54c-7efa540e3e3d';

app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const response = await fetch(MOCK_API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados do mock:', error);
    res.status(500).json({ message: 'Erro ao buscar dados do mock' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
