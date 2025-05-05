// server/utils/toxicityChecker.js

// Common toxic plants for cats
const toxicPlantsCats = [
    // Lilies - extremely toxic to cats
    { name: 'Lily', scientific: ['Lilium', 'Hemerocallis'], severity: 'high' },
    // Common houseplants
    { name: 'Pothos', scientific: ['Epipremnum', 'Scindapsus'], severity: 'moderate' },
    { name: 'Philodendron', scientific: ['Philodendron'], severity: 'moderate' },
    { name: 'Peace Lily', scientific: ['Spathiphyllum'], severity: 'moderate' },
    { name: 'Sago Palm', scientific: ['Cycas revoluta'], severity: 'high' },
    { name: 'Aloe', scientific: ['Aloe vera', 'Aloe barbadensis'], severity: 'mild' },
    { name: 'Snake Plant', scientific: ['Sansevieria', 'Dracaena trifasciata'], severity: 'mild' },
    // Trees and shrubs
    { name: 'Azalea', scientific: ['Rhododendron'], severity: 'high' },
    { name: 'Oleander', scientific: ['Nerium oleander'], severity: 'high' },
    // Common flowers
    { name: 'Tulip', scientific: ['Tulipa'], severity: 'moderate' },
    { name: 'Daffodil', scientific: ['Narcissus'], severity: 'moderate' },
    { name: 'Chrysanthemum', scientific: ['Chrysanthemum'], severity: 'mild' },
  ];
  
  // Common toxic plants for dogs
  const toxicPlantsDogs = [
    // Many are the same but with different severity
    { name: 'Sago Palm', scientific: ['Cycas revoluta'], severity: 'high' },
    { name: 'Azalea', scientific: ['Rhododendron'], severity: 'high' },
    { name: 'Oleander', scientific: ['Nerium oleander'], severity: 'high' },
    { name: 'Lily of the Valley', scientific: ['Convallaria majalis'], severity: 'high' },
    { name: 'Tulip', scientific: ['Tulipa'], severity: 'moderate' },
    { name: 'Daffodil', scientific: ['Narcissus'], severity: 'moderate' },
    { name: 'Philodendron', scientific: ['Philodendron'], severity: 'mild' },
  ];
  
  // Toxicity info by severity
  const toxicityInfo = {
    high: {
      cats: {
        symptoms: ['Vomiting', 'Lethargy', 'Kidney failure', 'Possible death'],
        notes: 'Requires immediate veterinary attention.'
      },
      dogs: {
        symptoms: ['Vomiting', 'Diarrhea', 'Abnormal heart rate', 'Seizures'],
        notes: 'Requires immediate veterinary attention.'
      }
    },
    moderate: {
      cats: {
        symptoms: ['Oral irritation', 'Vomiting', 'Difficulty swallowing'],
        notes: 'Contact your veterinarian if symptoms persist.'
      },
      dogs: {
        symptoms: ['Vomiting', 'Diarrhea', 'Drooling', 'Depression'],
        notes: 'Contact your veterinarian if symptoms persist.'
      }
    },
    mild: {
      cats: {
        symptoms: ['Oral irritation', 'Minor digestive upset'],
        notes: 'Monitor your pet and call vet if symptoms worsen.'
      },
      dogs: {
        symptoms: ['Mild digestive upset', 'Drooling'],
        notes: 'Monitor your pet and call vet if symptoms worsen.'
      }
    }
  };
  
  // Check if a plant is toxic to pets
  const checkPlantToxicity = (plantName, scientificName) => {
    const normalizedName = plantName.toLowerCase();
    const normalizedScientific = scientificName.toLowerCase();
    
    // Check for cats
    const toxicToCat = toxicPlantsCats.find(plant => {
      return normalizedName.includes(plant.name.toLowerCase()) || 
             plant.scientific.some(sci => normalizedScientific.includes(sci.toLowerCase()));
    });
    
    // Check for dogs
    const toxicToDog = toxicPlantsDogs.find(plant => {
      return normalizedName.includes(plant.name.toLowerCase()) || 
             plant.scientific.some(sci => normalizedScientific.includes(sci.toLowerCase()));
    });
    
    return {
      isToxicToCats: !!toxicToCat,
      isToxicToDogs: !!toxicToDog,
      catToxicity: toxicToCat ? {
        severity: toxicToCat.severity,
        symptoms: toxicityInfo[toxicToCat.severity].cats.symptoms,
        notes: toxicityInfo[toxicToCat.severity].cats.notes
      } : null,
      dogToxicity: toxicToDog ? {
        severity: toxicToDog.severity,
        symptoms: toxicityInfo[toxicToDog.severity].dogs.symptoms,
        notes: toxicityInfo[toxicToDog.severity].dogs.notes
      } : null
    };
  };
  
  module.exports = { checkPlantToxicity };