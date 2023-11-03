import React, { useState } from 'react'
import Back from './back.jpg';
import './Card.css';

const Card = () => {
 const [click, handleClick] = useState("");



  return (
    <div className='box'>
        
            <img className='image'src={Back} alt="background" />
        
        <div className='desc-box'>
            <h3 className='title'>Albert hall</h3>
            <div className='underline'></div>
            <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick={handleClick}>View More</button>
    </div>
  )
}

export default Card