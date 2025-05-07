import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WateringLegend from '../legends/WateringLegend';

// Helper function to capitalize strings
const capitalize = (str) => {
  // Check if str is a string and not null/undefined
  if (!str || typeof str !== 'string') return '';
  
  // For multi-word strings, capitalize each word
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Improved helper function to capitalize each string in an array with better type checking
const capitalizeArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.map(item => {
    // Make sure each item is a string before trying to capitalize
    if (typeof item === 'string') {
      return capitalize(item);
    }
    return item;
  });
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allPlants, setAllPlants] = useState([]);

  // Fetch all plants on component mount
  useEffect(() => {
    const fetchAllPlants = async () => {
      try {
        const res = await axios.get('/api/plants/all');
        setAllPlants(res.data.data || []);
      } catch (error) {
        console.error('Error fetching plants:', error);
        setError('Error connecting to the API. Please check if the server is running.');
      }
    };

    fetchAllPlants();
  }, []);

  const searchPlants = async () => {
    setLoading(true);
    setError('');
    try {
      // Use the search endpoint from our local database API
      const res = await axios.get(`/api/plants/search?query=${searchTerm}`);      setSearchResults(res.data.data || []);
    } catch (error) {
      console.error('Error searching plants:', error);
      setError('Error connecting to the API. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  // Add a function to view all plants when no search term is entered
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      // If search term is empty, show all plants
      setSearchResults(allPlants);
      return;
    }
    
    // Otherwise, perform the search
    searchPlants();
  };

  // Handle Enter key in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <header className="home-header">
        <h1>SafeSprout</h1>
        <p>Your Plant Journal with Pet Safety Features</p>
      </header>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <WateringLegend />
      
      {error && <p className="error">{error}</p>}
      
      <div className="results">
        {searchResults.length > 0 ? (
          searchResults.map(plant => (
            <div key={plant.id} className="plant-card">
              <h3>{capitalize(plant.common_name)}</h3>
              <p><em>{plant.scientific_name && plant.scientific_name.join(', ')}</em></p>
              {plant.default_image && plant.default_image.thumbnail && (
                <img 
                  src={plant.default_image.thumbnail} 
                  alt={capitalize(plant.common_name)} 
                  style={{ maxWidth: '200px' }} 
                />
              )}
              
              {/* Pet Toxicity Information */}
              <div className="toxicity-info">
                <h4>Pet Safety Information</h4>
                <div className="cat-toxicity">
                  {plant.toxicity && plant.toxicity.isToxicToCats !== null ? (
                    plant.toxicity.isToxicToCats ? (
                      <div className="toxic-warning">
                        <p>⚠️ <strong>Toxic to Cats</strong> - Severity: {plant.toxicity.catToxicity.severity}</p>
                        <p><strong>Symptoms:</strong> {plant.toxicity.catToxicity.symptoms.join(', ')}</p>
                        <p><strong>Note:</strong> {plant.toxicity.catToxicity.notes}</p>
                      </div>
                    ) : (
                      <p className="safe">✅ Likely safe for cats</p>
                    )
                  ) : (
                    <p className="unknown">ℹ️ Toxicity to cats unknown</p>
                  )}
                </div>
                
                <div className="dog-toxicity">
                  {plant.toxicity && plant.toxicity.isToxicToDogs !== null ? (
                    plant.toxicity.isToxicToDogs ? (
                      <div className="toxic-warning">
                        <p>⚠️ <strong>Toxic to Dogs</strong> - Severity: {plant.toxicity.dogToxicity.severity}</p>
                        <p><strong>Symptoms:</strong> {plant.toxicity.dogToxicity.symptoms.join(', ')}</p>
                        <p><strong>Note:</strong> {plant.toxicity.dogToxicity.notes}</p>
                      </div>
                    ) : (
                      <p className="safe">✅ Likely safe for dogs</p>
                    )
                  ) : (
                    <p className="unknown">ℹ️ Toxicity to dogs unknown</p>
                  )}
                </div>
                
                {plant.toxicity && plant.toxicity.notes && !plant.toxicity.isToxicToCats && !plant.toxicity.isToxicToDogs && (
                  <p className="toxicity-notes"><strong>Notes:</strong> {plant.toxicity.notes}</p>
                )}
                
                <p className="toxicity-disclaimer">
                  <small>
                    <em>Note: This toxicity information is provided as a general guide. 
                    When in doubt, consult with a veterinarian before bringing any plant into a home with pets.</em>
                  </small>
                </p>
              </div>
              
              {/* Basic Plant Care Information */}
              <div className="care-info">
                <h4>Basic Care</h4>
                {plant.watering && (
                  <p><strong>Watering:</strong> {plant.watering}</p>
                )}
                {plant.sunlight && plant.sunlight.length > 0 && (
                  <p><strong>Sunlight:</strong> {capitalizeArray(plant.sunlight).join(', ')}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No results to display. Try searching for a plant.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;