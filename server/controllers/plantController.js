exports.searchPlants = async (req, res) => {
    try {
      const { query, light, water, toxic, tags } = req.query;
      const searchQuery = {};
      
      // Handle text search
      if (query) {
        searchQuery.$or = [
          { scientificName: { $regex: query, $options: 'i' } },
          { commonNames: { $regex: query, $options: 'i' } },
          { tags: { $regex: query, $options: 'i' } }
        ];
      }
      
      // Handle filter parameters
      if (light) {
        searchQuery['careRequirements.light.level'] = light;
      }
      
      if (water) {
        searchQuery['careRequirements.water.frequency'] = water;
      }
      
      if (toxic !== undefined) {
        searchQuery['toxicity.toxic'] = toxic === 'true';
      }
      
      if (tags) {
        const tagArray = tags.split(',');
        searchQuery.tags = { $in: tagArray };
      }
      
      const plants = await Plant.find(searchQuery);
      res.status(200).json(plants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };