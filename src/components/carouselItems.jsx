import React from 'react'

export const CarouselItem = ({item}) => {
  return (
    <div className='carousel-item'>
      <div></div>
      <a href={item.link}>
      <img className='carousel-img' src={item.image} alt="" />

      </a>
      <div className="carousel-item-text">{item.info}</div>
      </div>
  )
}
