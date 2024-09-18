/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './firstpage.css';
import catImage from '../../imazhe/cat.jpg';
import birdImage from '../../imazhe/bird.jpg';
import dogImage from '../../imazhe/dog.jpg';

const AnimalsSection = () => {
  return (
    <section id="kafshet" className="section kafshet">
      <h2>Animals</h2>
      <br />
      <div className="kafshet-container">
        <div className="photo">
          <Link to="/pet-list/cats">
            <img src={catImage} alt="Cats" />
          </Link>
          <div className="card">
            <h4><b>Click me!</b></h4>
          </div>
        </div>
        <div className="photo">
          <Link to="/pet-list/birds">
            <img src={birdImage} alt="Birds" />
          </Link>
          <div className="card">
            <h4><b>Click me!</b></h4>
          </div>
        </div>
        <div className="photo">
          <Link to="/pet-list/dogs">
            <img src={dogImage} alt="Dogs" />
          </Link>
          <div className="card">
            <h4><b>Click me!</b></h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalsSection;
