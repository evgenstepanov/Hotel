import React from 'react';
import Title from './Title';
import RoomList from './RoomList';

export default function FeaturedRooms({ type }) {
  return (
    <section className='section'>
      <Title title='featured rooms' />
      <RoomList type='featured' />
    </section>
  );
}
