import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import Banner from '../Banner';
import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title='Luxuriuos rooms' subtitle='Deluxe rooms start at $299'>
          <Link className='btn-primary' to='/rooms'>
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
