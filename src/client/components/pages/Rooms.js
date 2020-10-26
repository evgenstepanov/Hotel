import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import Banner from '../Banner';
import RoomSearching from '../RoomSearching';
import ScrollToTop from '../ScrollToTop';

export default function Rooms() {
  return (
    <>
      <ScrollToTop />
      <Hero hero='rooms-hero'>
        <Banner title='Our rooms'>
          <Link className='btn-primary' to='/'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomSearching />
    </>
  );
}
