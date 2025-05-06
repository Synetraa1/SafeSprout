import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

const MyPlants = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMyPlants = async () => {
      try {
        // This is a placeholder - you would need to create this endpoint
        const res = await axios.get('http://localhost:5000/api/plants/my-plants');
        setMyPlants(res.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching your plants:', err);
        setError('Could not fetch your plants. Please try again later.');
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchMyPlants();
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div className="loading">Loading your plants...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="my-plants-container">
      <h2>My Plants</h2>
      
      {myPlants.length === 0 ? (
        <div className="empty-plants">
          <p>You haven't added any plants to your collection yet.</p>
          <button className="btn">Add Your First Plant</button>
        </div>
      ) : (
        <div className="plant-grid">
          {/* Plant cards would go here */}
          <p>Plants will display here once you add them to your collection.</p>
        </div>
      )}
    </div>
  );
};

export default MyPlants;