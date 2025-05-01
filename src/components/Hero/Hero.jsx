import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
       <div>
        <div className="hero-hand-icon">
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
