/* eslint-disable no-unused-vars */
import React from 'react';
import "./firstpage.css";
const ContactUs = () => {
  return (
    <section id="contact-us" className="section">
      <div className="contact-section">
        <h2 style={{ color: 'black' }}>Contact Us</h2>
        <a href="mailto:info@pawsomeshop.com" style={{ color: 'black' }}>info@pawsomeshop.com</a>
        <br />
        <a href="tel:+1234567890" style={{ color: 'black' }}>+123 456 7890</a>
      </div>
    </section>
  );
}

export default ContactUs;
