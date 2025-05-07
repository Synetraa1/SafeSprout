// server/routes/plants.js
const express = require('express');
const router = express.Router();

// Import the plants database from the data folder (only once)
const plantsDatabase = require('../data/plants-database');

// Get all plants
router.get('/all', (req, res) => {
  try {
    res.json({
      success: true,
      data: plantsDatabase
    });
  } catch (error) {
    console.error('Error fetching all plants:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching plants',
      error: error.message
    });
  }
});

// Search for plants
router.get('/search', (req, res) => {
  try {
    const { query } = req.query;
   
    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }
   
    // Filter the plants based on the search query
    // Search in common name and scientific name
    const searchResults = plantsDatabase.filter(plant => {
      // Check if query matches common name
      if (plant.common_name.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
     
      // Check if query matches any scientific name
      if (plant.scientific_name.some(name => name.toLowerCase().includes(query.toLowerCase()))) {
        return true;
      }
     
      return false;
    });
   
    res.json({
      success: true,
      data: searchResults
    });
   
  } catch (error) {
    console.error('Error searching plants:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching plants',
      error: error.message
    });
  }
});

// Get detailed information for a specific plant
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
   
    // Find the plant with the matching ID
    const plant = plantsDatabase.find(p => p.id === parseInt(id));
   
    if (!plant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found'
      });
    }
   
    res.json({
      success: true,
      data: plant
    });
   
  } catch (error) {
    console.error('Error fetching plant details:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching plant details',
      error: error.message
    });
  }
});

module.exports = router;