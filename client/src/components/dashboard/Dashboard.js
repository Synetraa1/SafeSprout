// src/components/Dashboard.js
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);
  
  if (loading || !user) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome {user?.name}!</p>
      <div className="dashboard-content">
        <h3>Your Plant Collection</h3>
        <p>You haven't added any plants to your collection yet.</p>
        <button className="btn">Add Plants</button>
      </div>
    </div>
  );
};

export default Dashboard;