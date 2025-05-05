const mongoose = require('mongoose');

const UserPlantSchema = new mongoose.Schema({
  plantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',
    required: true
  },
  nickname: String,
  location: String,
  acquiredDate: Date,
  lastWatered: Date,
  lastFertilized: Date,
  notes: String,
  photos: [{
    url: String,
    date: {
      type: Date,
      default: Date.now
    },
    note: String
  }],
  healthStatus: {
    type: String,
    enum: ['Healthy', 'Needs Attention', 'Struggling', 'Recovering'],
    default: 'Healthy'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserPlant', UserPlantSchema);