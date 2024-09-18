/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const PetCard = ({ pet, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(pet)}>
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>{pet.species ? `Species: ${pet.species}` : `Origin: ${pet.origin}`}</p>
    </div>
  );
};

export default PetCard;
