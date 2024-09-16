/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import "./firstpage.css";
import carImage from "../../imazhe/car.jpg";
import dereImage from "../../imazhe/dere.jpg";
import calenImage from "../../imazhe/calen.jpg";
import makineImage from "../../imazhe/makine.jpg";

const TransportSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      img: carImage,
      title: "FREE In-Store & Curbside Pickup",
      text: "Orders are ready in 2 hours or less!",
      descriptionTitle: "FREE In-Store & Curbside Pickup Details",
      description: "No time to shop in the store? No worries! With our Curbside Pickup option, shopping for pet supplies has never been easier. Simply place your order online, pull up outside the store, wait in your vehicle and we’ll do the rest. Save time and energy by using our free Curbside or In-Store Pickup today!"
    },
    {
      id: 2,
      img: dereImage,
      title: "FREE Same-Day Delivery",
      text: "FREE Same-Day Delivery",
      descriptionTitle: "Delivery Details",
      description: "SAVE $10 when you spend $30 or more on cat litter with FREE Same-Day Delivery thru 9/8*"
    },
    {
      id: 3,
      img: calenImage,
      title: "Autoship",
      text: "Save 35% on your first order + 5% off future orders",
      descriptionTitle: "Autoship Details",
      description: "Because shopping over and over is over! Save 35% on your first Autoship order plus 5% off future orders"
    },
    {
      id: 4,
      img: makineImage,
      title: "FREE Shipping",
      text: "Treats Rewards Members get FREE shipping on select orders $49+",
      descriptionTitle: " FREE Shipping Details",
      description: "Different shipping methods are available based on the products purchased and the delivery location. Each shipping method has its own restrictions and charges that will be applied to your order."
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section id="transport" className="section">
      <h2>Transport</h2>
      <br />
      <div className="photo-container">
        {cardData.map((card) => (
          <div key={card.id} className="photo-item" onClick={() => handleCardClick(card)}>
            <img src={card.img} alt={card.title} />
            <div className="card">
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <Dialog
          open={!!selectedCard}
          onClose={closeModal}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">{selectedCard.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              <strong>{selectedCard.descriptionTitle}</strong>
              <p>{selectedCard.description}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </section>
  );
}

export default TransportSection;
