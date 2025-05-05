const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  scientificName: String,
  commonNames: [String],
  description: String,
  careInstructions: {
    water: {
      frequency: String,
      amount: String,
      notes: String
    },
    light: {
      level: String,
      notes: String
    },
    soil: {
      type: String,
      notes: String
    }
  },
  toxicity: {
    isToxicToCats: Boolean,
    isToxicToDogs: Boolean,
    toxicParts: [String],
    symptoms: [String],
    notes: String
  },
  images: [String],
  trefleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Plant', PlantSchema);