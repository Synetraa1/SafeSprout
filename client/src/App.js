import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import WateringLegend from './legends/WateringLegend';

const API_URL = '/api/plants';

export const getAllPlants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching plants:', error);
    throw error;
  }
};

export const getPlantBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching plant ${slug}:`, error);
    throw error;
  }
};

export const searchPlants = async (criteria) => {
  try {
    const params = new URLSearchParams();
    
    if (criteria.light) params.append('light', criteria.light);
    if (criteria.water) params.append('water', criteria.water);
    if (criteria.toxic !== undefined) params.append('toxic', criteria.toxic);
    if (criteria.tags) params.append('tags', criteria.tags.join(','));
    
    const response = await axios.get(`${API_URL}/search?${params}`);
    return response.data;
  } catch (error) {
    console.error('Error searching plants:', error);
    throw error;
  }
};

export const createPlant = async (plantData) => {
  try {
    const response = await axios.post(API_URL, plantData);
    return response.data;
  } catch (error) {
    console.error('Error creating plant:', error);
    throw error;
  }
};

export const updatePlant = async (slug, plantData) => {
  try {
    const response = await axios.put(`${API_URL}/${slug}`, plantData);
    return response.data;
  } catch (error) {
    console.error(`Error updating plant ${slug}:`, error);
    throw error;
  }
};

export const deletePlant = async (slug) => {
  try {
    const response = await axios.delete(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting plant ${slug}:`, error);
    throw error;
  }
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const results = await searchPlants({ 
        query: searchTerm 
      });
      setSearchResults(results || []);
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
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <WateringLegend />
      
      {error && <p className="error">{error}</p>}
      
      <div className="results">
      {searchResults.length > 0 ? (
  searchResults.map(plant => (
    <div key={plant._id} className="plant-card">
      <h3>
      {plant.commonNames && plant.commonNames.length > 0 
        ? plant.commonNames[0].charAt(0).toUpperCase() + plant.commonNames[0].slice(1) 
        : 'Unknown Plant'}
      </h3>
      <p><em>{plant.scientificName || 'Unknown Scientific Name'}</em></p>
      
      {/* Pet Toxicity Information */}
      <div className="toxicity-info">
        <h4>Pet Safety Information</h4>
        {plant.toxicity && (
          <>
            <div className="pet-toxicity">
              {plant.toxicity.toxic ? (
                <div className="toxic-warning">
                  <p>⚠️ <strong>Toxic to {plant.toxicity.affected.join(', ')}</strong> - Severity: {plant.toxicity.severity}</p>
                  <p><strong>Symptoms:</strong> {plant.toxicity.symptoms.join(', ')}</p>
                  <p><strong>Toxic parts:</strong> {plant.toxicity.toxic_parts.join(', ')}</p>
                </div>
              ) : (
                <p className="safe">✅ Likely safe for pets</p>
              )}
            </div>
          </>
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
        {plant.careRequirements && (
          <>
            {plant.careRequirements.water && (
              <p><strong>Watering:</strong> {plant.careRequirements.water.frequency}</p>
            )}
            {plant.careRequirements.light && (
              <p><strong>Sunlight:</strong> {plant.careRequirements.light.level}</p>
            )}
          </>
        )}
      </div>
      
      {/* Tags */}
      <div className="tags">
        {plant.tags && plant.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
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