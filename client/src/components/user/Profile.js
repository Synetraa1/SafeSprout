import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Profile = () => {
  const { user, loading, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  if (loading || !user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      
      <div className="profile-card">
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Member since: {new Date(user.date).toLocaleDateString()}</p>
        </div>
        
        <div className="profile-actions">
          <button className="btn">Edit Profile</button>
          <button className="btn btn-password">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;