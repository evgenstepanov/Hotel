import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../Hero';
import Banner from '../Banner';
import { StoreContext } from '../../store';

export default function SingleRoom() {
  const {
    rooms: [rooms],
    getRoom,
  } = React.useContext(StoreContext);
  let { slug } = useParams();
  const [singleRoom, setSingleRoom] = useState();

  useEffect(() => {
    let room = getRoom(slug);
    setSingleRoom(room);
  }, [rooms]);

  if (singleRoom) {
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = singleRoom;
  }
  return (
    <>
      <Hero hero='rooms-hero'>
        <Banner title={!singleRoom ? 'Error' : singleRoom.name}>
          <Link className='btn-primary' to='/rooms'>
            back to rooms
          </Link>
        </Banner>
      </Hero>
      {!singleRoom ? (
        <div className='error-info'>
          <h1 className='error-infp__title'>Sorry, there is not such room</h1>
          <p>please, try another request</p>
        </div>
      ) : (
        <div className='room-info'>ROOM_INFO</div>
      )}
    </>
  );
}
