/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Dog = ({ dog, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(dog)}>
      <img src={dog.image} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Origin: {dog.origin}</p>
    </div>
  );
};

export default Dog;
