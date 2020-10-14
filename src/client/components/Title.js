import React from 'react';

export default function Title({ title }) {
  return (
    <div className='section-title'>
      <h2 className='section-title__text'>{title}</h2>
    </div>
  );
}
