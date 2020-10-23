import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../Hero';
import StyledHero from '../StyledHero';
import Banner from '../Banner';
import { StoreContext } from '../../store';
import RoomInfo from '../RoomInfo';

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
    const { name, images } = singleRoom;
    return (
      <>
        <StyledHero image={images[0]}>
          <Banner title={`${name} room`}>
            <Link className='btn-primary' to='/rooms'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='room-info center-container'>
          <RoomInfo singleRoom={singleRoom} />
        </section>
      </>
    );
  }
  return (
    <>
      <Hero hero='rooms-hero'>
        <Banner title='Sorry, no such room'>
          <Link className='btn-primary' to='/rooms'>
            back to rooms
          </Link>
        </Banner>
      </Hero>
      <section className='error-info'>
        <h1 className='error-infp__title'>Sorry, there is not such room</h1>
        <p>please, try another request</p>
      </section>
    </>
  );
}
