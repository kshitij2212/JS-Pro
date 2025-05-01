import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
     <h1>Exclusive Offers For You</h1>
     <p>ONLY ON SG PRODUCTS</p>
     <button onClick={() => window.location.href = './bats'}>Check Now</button>
    </div>
    <img src={exclusive_image} alt="" />
    </div>
  )
}

export default Offers
