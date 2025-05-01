import React from 'react';
import './Hero.css';
import hero_img from '../Assets/hero_image.png'; 

const Hero = () => {
  const scrollToCollections = () => {
    const section = document.querySelector('.new-collections');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
        Your<br/> One-Stop<br/>Cricket Shop
        </h1>
        <button onClick={scrollToCollections}>
          View Products 
        </button>
      </div>
      <div className="hero-image">
        <img src={hero_img} alt="Product" />
      </div>
    </div>
  );
};

export default Hero;











