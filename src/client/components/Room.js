import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../img/room-1.jpeg';

export default function Room({ data }) {
  const { name, slug, images, price } = data;

  
  return (
    <article className='room'>
      <div className='image-container'>
        <img src={images[0] || defaultImg} alt={name} className='image-room' />
        <div className='price'>
          <h6 className='price__title'>${price}</h6>
          <p className='price__text'>per night</p>
        </div>
        <Link className='btn-primary room__link' to={`/rooms/${slug}`}>
          {name}
        </Link>
      </div>
    </article>
  );
}
