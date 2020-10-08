import React from 'react';
import gif from '../img/gif/loading-gif.webp';

export default function Loading() {
  return (
    <div className='loading'>
      <h4>rooms data is loading...</h4>
      <img src={gif} alt='' />
    </div>
  );
}
