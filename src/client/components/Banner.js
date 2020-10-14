import React from 'react';

export default function Banner({ title, subtitle, children }) {
  return (
    <div className='banner'>
      <h1 className='banner__title'>{title}</h1>
      <h4 className='banner__subtitle'>{subtitle}</h4>
      {children}
    </div>
  );
}
