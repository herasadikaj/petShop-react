/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';  // Ensure this import path is correct
import './animals.css'; // Make sure to include CSS if needed

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <header>
      <nav className="navbar">
        {/* Link to homepage */}
        <Link to="/">
          <img src="src/imazhe/logo.png" className="navbar-logo" alt="Logo" />
        </Link>
        <div className="search-form-container"> {/* Ensure this wrapper is used */}
          <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
