/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';  
import logo from '../../imazhe/logo.png'; 

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} className="navbar-logo" alt="Logo" />
        </Link>
        <div className="search-form-container"> 
          <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
