import React from 'react'

const Card = ({card}) => {
  <>
  {
    card ?Card(
      card.map((anime, index)=>{
        return(
          <div className='box'>
        <img className='image' src={anime.images.jpg.large_image_url} alt="background" />
        <div className='desc-box'>
          <h3 className='title'>{anime.title}</h3>
          <div className='underline'></div>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, delectus?</p>
        </div>
        <div className='underline'></div>
        <button className='btn' onClick='/App'>View More</button>
      </div>
        )
      })
    ):"Not Found"
  }



</>
}

export default Card