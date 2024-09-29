import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // We'll add some simple styling for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
