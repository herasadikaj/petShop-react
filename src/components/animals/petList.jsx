/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import PetCard from './petCard';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import './animals.css';

const PetList = ({ petType, apiUrl }) => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
 
        const response = await fetch(apiUrl);  
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        setErrorMessage('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPet(null);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div id="pet-container">
        {loading ? (
          <p>Loading...</p>
        ) : errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onClick={handlePetClick} />
          ))
        ) : (
          <p>No {petType}s found.</p>
        )}
      </div>
      <Footer />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedPet?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {selectedPet?.species ? `Species: ${selectedPet?.species}` : `Origin: ${selectedPet?.origin}`}
          </Typography>
          {selectedPet?.breed_group && (
            <Typography variant="body1">Breed Group: {selectedPet?.breed_group}</Typography>
          )}
          {selectedPet?.size && <Typography variant="body1">Size: {selectedPet?.size}</Typography>}
          {selectedPet?.lifespan && (
            <Typography variant="body1">Lifespan: {selectedPet?.lifespan}</Typography>
          )}
          {selectedPet?.temperament && (
            <Typography variant="body1">Temperament: {selectedPet?.temperament}</Typography>
          )}
          {selectedPet?.colors && <Typography variant="body1">Colors: {selectedPet?.colors}</Typography>}
          <Typography variant="body1">Description: {selectedPet?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PetList;
