import React from 'react';
import Title from './Title';
import { StoreContext } from '../store';
import Loading from './Loading';


export default function FeaturedRooms() {
  const { featuredRooms } = React.useContext(StoreContext);
  return (
    <div className='featured-rooms'>
      <Title title='featured rooms' />
      <Loading /> 
    </div>
  );
}
