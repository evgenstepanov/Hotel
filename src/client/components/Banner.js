import React from 'react';

export default function Banner({ title, subtitle, children }) {
  return (
    <div className='banner'>
      <h1 className='banner__title'>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
      {children}
    </div>
  );
}
