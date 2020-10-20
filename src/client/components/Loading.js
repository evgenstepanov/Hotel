import React from 'react';
import gif from '../img/gif/loading-gif.webp';

export default function Loading() {
  return (
    <div className='loading'>
      <img className='loading__img' src={gif} alt='' />
      <h4>rooms data is loading</h4>
    </div>
  );
}
