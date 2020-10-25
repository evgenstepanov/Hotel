import React from 'react';
import RoomPics from './RoomPics';

export default function RoomInfo({ singleRoom }) {
  const {
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = singleRoom;
  const [, ...restImages] = images;

  return (
    <>
      <RoomPics images={restImages} />
      <div className='description-container'>
        <article className='info'>
          <h3 className='room-info__title room-info__title--left'>info</h3>
          <p className='info__item'>Price : ${price}</p>
          <p className='info__item'>
            Size : {size} m<sup>2</sup>
          </p>
          <p className='info__item'>
            Max capacity:
            {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
          </p>
          <p className='info__item'>
            {pets ? 'Pets allowed' : 'No pets allowed'}
          </p>
          <p className='info__item'>{breakfast && 'Free breakfast included'}</p>
        </article>
        <article className='description'>
          <h3 className='room-info__title'>details</h3>
          <p className='description__text'>{description}</p>
        </article>
      </div>
      <article className='extras'>
        <h3 className='room-info__title'>extras</h3>
        <ul className='extras__list'>
          {extras.map((item, index) => (
            <li className='extras__item' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
