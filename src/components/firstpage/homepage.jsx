/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header';
import AboutUs from './aboutUs';
import AnimalsSection from './animals';
import TransportSection from './transport';
import ContactUs from './contactUs';
import Footer from './footer';
import "./firstpage.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="animals-gallery">
        <AnimalsSection />
      </section>
      <section id="transport">
        <TransportSection />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
