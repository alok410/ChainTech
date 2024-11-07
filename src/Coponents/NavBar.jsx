import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ isAuthenticated, handleLogout }) {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      {isAuthenticated && <Link to="/account">Account</Link>}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default NavBar;
