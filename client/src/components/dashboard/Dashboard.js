import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const { user, loading, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return loading || !user ? (
    <div className="loader">Loading...</div>
  ) : (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome {user.name}</p>
      <div className="dashboard-content">
        <h3>Your Profile</h3>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Account created:</strong> {new Date(user.date).toLocaleDateString()}</p>
        </div>
        {/* Add your plant-related content here */}
        <div className="plants-section">
          <h3>Your Plants</h3>
          <p>You don't have any plants yet. Add your first plant to get started!</p>
          <button className="btn btn-success">Add Plant</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;