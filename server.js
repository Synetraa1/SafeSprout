const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
require('dotenv').config();

console.log('Environment variables loaded:', {
    trefleKeyDefined: process.env.PERENUAL_API_KEY ? 'Yes (key exists)' : 'No (missing)'
  });

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const plantRoutes = require('./server/routes/plants');

// Use routes
app.use('/api/plants', plantRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('SafeSprout API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
