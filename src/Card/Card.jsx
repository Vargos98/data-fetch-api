import React, { useState } from 'react'
import Back from './back.jpg';
import './Card.css';

const Card = () => {
  const [click, handleClick] = useState("");



  return (

    <div className="outer-box">
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>



      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      <div className='box'>
        <img className='image' src={Back} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>Albert hall</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
      
      
    </div>

  )
}

export default Card