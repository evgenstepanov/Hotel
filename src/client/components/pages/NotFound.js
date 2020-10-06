import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import Banner from '../Banner';

export default function NotFound() {
  return (
    <Hero>
      <Banner title='404' subtitle='Sorry'>
        <Link className='btn-primary' to='/rooms'>
          Home page
        </Link>
      </Banner>
    </Hero>
  );
}

// TODAY IS STYLES
