/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cat = ({ cat, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(cat)}>
      <img src={cat.image} alt={cat.name} />
      <h2>{cat.name}</h2>
      <p>Origin: {cat.origin}</p>
    </div>
  );
};

export default Cat;
