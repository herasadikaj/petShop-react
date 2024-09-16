/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bird = ({ bird, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(bird)}>
      <img src={bird.image} alt={bird.name} />
      <h2>{bird.name}</h2>
      <p>Species: {bird.species}</p>
    </div>
  );
};

export default Bird;
