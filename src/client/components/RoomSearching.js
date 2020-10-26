import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Title from './Title';

export default function RoomSearching() {
  return (
    <section className='section'>
      <Title title='Search room' />
      <RoomFilter />
      <RoomList type='sorted' />
    </section>
  );
}
