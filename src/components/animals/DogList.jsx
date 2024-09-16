/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './header'; 
import Dog from './Dog'; 
import Footer from './footer';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import './animals.css';
import './search';

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false); 
  const [selectedDog, setSelectedDog] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/dogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Response:', data); 
       
        if (Array.isArray(data)) {
          setDogs(data);
        } else if (data.dogs && Array.isArray(data.dogs)) {
          setDogs(data.dogs);
        } else {
          throw new Error('Unexpected data format from API.');
        }

      } catch (error) {
        console.error('Error fetching dog data:', error);
        setErrorMessage('Failed to load dog data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDogClick = (dog) => {
    setSelectedDog(dog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDog(null);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div id="pet-container">
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          filteredDogs.length > 0 ? (
            filteredDogs.map(dog => (
              <Dog key={dog.id} dog={dog} onClick={() => handleDogClick(dog)} />
            ))
          ) : (
            <p>No dogs found.</p>
          )
        )}
      </div>
      <Footer />

     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedDog?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Breed Group: {selectedDog?.breed_group}</Typography>
          <Typography variant="body1">Size: {selectedDog?.size}</Typography>
          <Typography variant="body1">Lifespan: {selectedDog?.lifespan}</Typography>
          <Typography variant="body1">Temperament: {selectedDog?.temperament}</Typography>
          <Typography variant="body1">Colors: {selectedDog?.colors}</Typography>
          <Typography variant="body1">Description: {selectedDog?.description}</Typography>
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

export default DogList;
