/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './header'; 
import Bird from './Bird';
import Footer from './footer';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import './animals.css'; 

const BirdList = () => {
  const [birds, setBirds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false); 
  const [selectedBird, setSelectedBird] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/birds', {
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
          setBirds(data);
        } else if (data.birds && Array.isArray(data.birds)) {
          setBirds(data.birds);
        } else {
          setErrorMessage('Unexpected data format from API.');
        }

      } catch (error) {
        console.error('Error fetching bird data:', error);
        setErrorMessage('Failed to load bird data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBirdClick = (bird) => {
    setSelectedBird(bird);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBird(null);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div id="pet-container">
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          filteredBirds.length > 0 ? (
            filteredBirds.map(bird => (
              <Bird key={bird.id} bird={bird} onClick={() => handleBirdClick(bird)} />
            ))
          ) : (
            <p>No birds found.</p>
          )
        )}
      </div>
      <Footer />

      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedBird?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Species: {selectedBird?.species}</Typography>
          <Typography variant="body1">Family: {selectedBird?.family}</Typography>
          <Typography variant="body1">Habitat: {selectedBird?.habitat}</Typography>
          <Typography variant="body1">Description: {selectedBird?.description}</Typography>
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

export default BirdList;
