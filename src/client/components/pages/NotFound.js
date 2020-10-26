import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import Banner from '../Banner';
import ScrollToTop from '../ScrollToTop';

export default function NotFound() {
  return (
    <Hero>
      <ScrollToTop />
      <Banner title='404' subtitle='Sorry'>
        <Link className='btn-primary' to='/rooms'>
          Home page
        </Link>
      </Banner>
    </Hero>
  );
}
