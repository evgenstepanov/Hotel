import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../img/room-1.jpeg';

export default function Room({ data }) {
  const { name, type, images, price } = data;
  return (
    <article className='room'>
      <div className='image-container'>
        <img src={images[0] || defaultImg} alt={name} className='image-room' />
        <div className='price image-container__price '>
          <h6 className='price__title'>${price}</h6>
          <p className='price__text'>per night</p>
        </div>
        <Link to={`/rooms/${type}`}>LINK</Link>
      </div>
    </article>
  );
}
