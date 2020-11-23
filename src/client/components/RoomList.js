import React from 'react';
import { StoreContext } from '../store';
import Loading from './Loading';
import Room from './Room';

export default function RoomList({ type }) {
  const {
    loading: [loading],
    featuredRooms: [featuredRooms],
    sortedRooms: [sortedRooms],
  } = React.useContext(StoreContext);

  const rooms = type === 'sorted' ? sortedRooms : featuredRooms;

  return (
    <>
      {rooms.length ? (
        <div className='rooms-container'>
          {loading ? (
            <Loading />
          ) : (
            rooms.map(room => <Room key={room.id} data={room} />)
          )}
        </div>
      ) : (
        <h3 className='rooms-container_error'>
          Sorry, there is not such room
        </h3>
      )}
    </>
  );
}
