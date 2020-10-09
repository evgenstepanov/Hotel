import React from 'react';
import Title from './Title';
import { StoreContext } from '../store';
import Loading from './Loading';
import Room from './Room';

export default function FeaturedRooms() {
  const {
    featuredRooms: [featuredRooms],
    loading: [loading],
  } = React.useContext(StoreContext);

  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      {loading ? (
        <Loading />
      ) : (
        featuredRooms.map((room) => <Room key={room.id} data={room} />)
      )}
    </section>
  );
}
