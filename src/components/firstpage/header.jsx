/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './firstpage.css';
import backgroundImage from '../../imazhe/animals.png';

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className="navbar">
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#transport">Transport</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li className="dropdown">
            <a href="#animals-gallery" className="dropbtn">Animals Gallery</a>
            <div className="dropdown-content">
              <Link to="/pet-list/cats">Cats</Link>
              <Link to="/pet-list/dogs">Dogs</Link>
              <Link to="/pet-list/birds">Birds</Link>
            </div>
          </li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
