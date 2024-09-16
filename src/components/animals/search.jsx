/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './animals.css'; 

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search..."
        aria-label="Search"
      />
      <button type="submit" className='search-form'>Search</button>
    </form>
  );
};

export default Search;
