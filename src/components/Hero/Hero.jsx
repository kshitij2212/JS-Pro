import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  const handleSubmit = () => {
    const newCollectionsElement = document.querySelector('.new-collections');
    if (newCollectionsElement) {
      newCollectionsElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='hero'>
      <div className="hero-left">
        <div><h1>New Collections Every Week.</h1></div>
        <div>
          <div className="hero-hand-icon">
            <button className="hero-submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className="hero-right"> 
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
