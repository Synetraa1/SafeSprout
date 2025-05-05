const express = require('express');
const router = express.Router();
const axios = require('axios');
const { checkPlantToxicity } = require('../utils/toxicityChecker');

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Plants route is working' });
});

// Get plant data from Perenual API with toxicity information
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    console.log('Search endpoint hit with query:', query);
    
    // Call Perenual API
    const apiUrl = `https://perenual.com/api/species-list?key=${process.env.PERENUAL_API_KEY}&q=${query}`;
    console.log('Calling Perenual API:', apiUrl);
    
    const response = await axios.get(apiUrl);
    console.log('Perenual API responded with status:', response.status);
    
    // Enrich data with toxicity information
    if (response.data && response.data.data) {
      const enrichedData = response.data.data.map(plant => {
        const commonName = plant.common_name || '';
        const scientificName = plant.scientific_name && plant.scientific_name.length > 0 
          ? plant.scientific_name[0] 
          : '';
        
        const toxicityInfo = checkPlantToxicity(commonName, scientificName);
        
        return {
          ...plant,
          toxicity: toxicityInfo
        };
      });
      
      // Return the enriched data
      res.json({
        ...response.data,
        data: enrichedData
      });
    } else {
      res.json(response.data);
    }
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;