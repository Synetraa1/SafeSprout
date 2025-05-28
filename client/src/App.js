import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Profile from './components/user/Profile';
import MyPlants from './components/plants/MyPlants';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import NotificationCenter from './plants/NotificationCenter';

// Original App components (maintaining your existing functionality)
import HomePage from './components/HomePage'; // You'll need to create this

// Context
import { AuthProvider } from './components/auth/AuthContext';

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:5000';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <NotificationCenter />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route 
                path="/profile" 
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/my-plants" 
                element={
                  <PrivateRoute>
                    <MyPlants />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;