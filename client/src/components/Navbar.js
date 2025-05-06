import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <ul className="nav-links">
      <li>
        <Link to="/my-plants">My Plants</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!" className="logout">
          <span>Logout</span>
        </a>
      </li>
      {user && <li className="welcome">Welcome, {user.name}</li>}
    </ul>
  );

  const guestLinks = (
    <ul className="nav-links">
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          <span className="logo">🌱 SafeSprout</span>
        </Link>
      </h1>
      <div>{isAuthenticated ? authLinks : guestLinks}</div>
    </nav>
  );
};

export default Navbar;