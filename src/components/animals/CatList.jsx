/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './header'; 
import Cat from './Cat'; 
import Footer from './footer';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import './animals.css';

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false); 
  const [selectedCat, setSelectedCat] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/cats', { 
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
          setCats(data);
        } else if (data.cats && Array.isArray(data.cats)) {
          setCats(data.cats);
        } else {
          throw new Error('Unexpected data format from API.');
        }

      } catch (error) {
        console.error('Error fetching cat data:', error);
        setErrorMessage('Failed to load cat data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCat(null);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div id="pet-container">
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          filteredCats.length > 0 ? (
            filteredCats.map(cat => (
              <Cat key={cat.id} cat={cat} onClick={() => handleCatClick(cat)} />
            ))
          ) : (
            <p>No cats found.</p>
          )
        )}
      </div>
      <Footer />

     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedCat?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Breed: {selectedCat?.breed}</Typography>
          <Typography variant="body1">Size: {selectedCat?.size}</Typography>
          <Typography variant="body1">Lifespan: {selectedCat?.lifespan}</Typography>
          <Typography variant="body1">Temperament: {selectedCat?.temperament}</Typography>
          <Typography variant="body1">Colors: {selectedCat?.colors}</Typography>
          <Typography variant="body1">Description: {selectedCat?.description}</Typography>
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

export default CatList;
