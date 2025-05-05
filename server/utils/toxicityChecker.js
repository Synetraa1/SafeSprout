// server/utils/toxicityChecker.js
const Plant = require('../models/Plant');

// Check if a plant is toxic for a specific pet type
const isToxicForPet = async (plantSlug, petType) => {
  try {
    const plant = await Plant.findOne({ slug: plantSlug });
    
    if (!plant || !plant.toxicity) {
      return { error: 'Plant information not found' };
    }
    
    const isToxic = plant.toxicity.toxic && 
                    plant.toxicity.affected && 
                    plant.toxicity.affected.includes(petType);
    
    return {
      plantName: plant.scientificName,
      commonName: plant.commonNames[0] || '',
      isToxic,
      severity: isToxic ? plant.toxicity.severity : 'N/A',
      symptoms: isToxic ? plant.toxicity.symptoms : [],
      toxic_parts: isToxic ? plant.toxicity.toxic_parts : []
    };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  isToxicForPet
};