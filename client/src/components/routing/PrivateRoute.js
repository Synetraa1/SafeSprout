import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  
  if (loading) return <div className="loader">Loading...</div>;
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;