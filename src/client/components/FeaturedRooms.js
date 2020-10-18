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
    <section className='section'>
      <Title title='featured rooms' />
      <div className='center-container'>
        <div className='featured-rooms'>
          {loading ? (
            <Loading />
          ) : (
            featuredRooms.map((room) => <Room key={room.id} data={room} />)
          )}
        </div>
      </div>
    </section>
  );
}
