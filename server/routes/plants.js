const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Get all plants
router.get('/', plantController.getAllPlants);

// Search plants
router.get('/search', plantController.searchPlants);

// Get a single plant by slug
router.get('/:slug', plantController.getPlantBySlug);

// Create a new plant
router.post('/', plantController.createPlant);

// Update a plant
router.put('/:slug', plantController.updatePlant);

// Delete a plant
router.delete('/:slug', plantController.deletePlant);

module.exports = router;