import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import WateringLegend from './legends/WateringLegend';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchPlants = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/api/plants/search?query=${searchTerm}`);
      setSearchResults(res.data.data || []);
    } catch (error) {
      console.error('Error searching plants:', error);
      setError('Error connecting to the API. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SafeSprout</h1>
        <p>Your Plant Journal with Pet Safety Features</p>
      </header>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchPlants} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <WateringLegend />
      
      {error && <p className="error">{error}</p>}
      
      <div className="results">
        {searchResults.length > 0 ? (
          searchResults.map(plant => (
            <div key={plant.id} className="plant-card">
              <h3>{plant.common_name}</h3>
              <p><em>{plant.scientific_name && plant.scientific_name.join(', ')}</em></p>
              {plant.default_image && plant.default_image.thumbnail && (
                <img 
                  src={plant.default_image.thumbnail} 
                  alt={plant.common_name} 
                  style={{ maxWidth: '200px' }} 
                />
              )}
              
              {/* Pet Toxicity Information */}
              <div className="toxicity-info">
                <h4>Pet Safety Information</h4>
                <div className="cat-toxicity">
                  {plant.toxicity && plant.toxicity.isToxicToCats ? (
                    <div className="toxic-warning">
                      <p>⚠️ <strong>Toxic to Cats</strong> - Severity: {plant.toxicity.catToxicity.severity}</p>
                      <p><strong>Symptoms:</strong> {plant.toxicity.catToxicity.symptoms.join(', ')}</p>
                      <p><strong>Note:</strong> {plant.toxicity.catToxicity.notes}</p>
                    </div>
                  ) : (
                    <p className="safe">✅ Likely safe for cats</p>
                  )}
                </div>
                
                <div className="dog-toxicity">
                  {plant.toxicity && plant.toxicity.isToxicToDogs ? (
                    <div className="toxic-warning">
                      <p>⚠️ <strong>Toxic to Dogs</strong> - Severity: {plant.toxicity.dogToxicity.severity}</p>
                      <p><strong>Symptoms:</strong> {plant.toxicity.dogToxicity.symptoms.join(', ')}</p>
                      <p><strong>Note:</strong> {plant.toxicity.dogToxicity.notes}</p>
                    </div>
                  ) : (
                    <p className="safe">✅ Likely safe for dogs</p>
                  )}
                </div>
                
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
                  <p><strong>Sunlight:</strong> {plant.sunlight.join(', ')}</p>
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
}

export default App;