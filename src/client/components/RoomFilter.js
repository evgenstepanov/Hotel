import React from 'react';
import { StoreContext } from '../store';

export default function RoomFilter() {
  const {
    rooms: [rooms, setRooms],
  } = React.useContext(StoreContext);
  return <div>ROOMM FILTER</div>;
}
