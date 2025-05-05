// server/models/Plant.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  scientificName: {
    type: String,
    required: true,
    unique: true
  },
  commonNames: [String],
  slug: {
    type: String,
    required: true,
    unique: true
  },
  taxonomy: {
    kingdom: String,
    phylum: String,
    class: String,
    order: String,
    family: String,
    genus: String,
    species: String
  },
  origin: {
    nativeRegions: [String],
    habitat: String,
    introduced: [String]
  },
  careRequirements: {
    light: {
      level: String,
      description: String,
      tolerance: [String],
      hoursPerDay: {
        min: Number,
        ideal: Number,
        max: Number
      }
    },
    water: {
      frequency: String,
      schedule: String,
      sensitivity: String,
      drought_tolerance: String
    },
    soil: {
      type: String,
      composition: [String],
      pH: {
        min: Number,
        max: Number,
        ideal: Number
      }
    },
    temperature: {
      min: Number,
      max: Number,
      unit: String,
      frost_tolerance: String
    },
    humidity: {
      level: String,
      percentage: {
        min: Number,
        ideal: Number,
        max: Number
      }
    },
    fertilizer: {
      frequency: String,
      season: [String],
      type: String,
      npk: String
    }
  },
  growthCharacteristics: {
    habit: String,
    lifespan: String,
    mature_height: {
      value: Number,
      unit: String
    },
    mature_spread: {
      value: Number,
      unit: String
    },
    growth_rate: String,
    foliage: {
      type: String,
      color: [String],
      shape: String,
      size: {
        length: Number,
        width: Number,
        unit: String
      }
    }
  },
  propagation: [{
    method: String,
    difficulty: String,
    season: [String],
    instructions: String
  }],
  toxicity: {
    toxic: Boolean,
    affected: [String],
    symptoms: [String],
    severity: String,
    toxic_parts: [String]
  },
  problems: {
    pests: [{
      name: String,
      severity: String,
      treatment: String
    }],
    diseases: [{
      name: String,
      cause: String,
      treatment: String
    }]
  },
  tags: [String]
}, {
  timestamps: true
});

// Create indexes for better query performance
plantSchema.index({ scientificName: 1 });
plantSchema.index({ commonNames: 1 });
plantSchema.index({ slug: 1 });
plantSchema.index({ tags: 1 });
plantSchema.index({ 
  scientificName: 'text', 
  commonNames: 'text', 
  tags: 'text'
});

module.exports = mongoose.model('Plant', plantSchema);