import React, { useState, useEffect, useRef } from 'react';

export default function RoomInfo({ singleRoom }) {
  const [popup, setPopup] = useState({
    open: false,
    src: '',
    alt: '',
  });
  const [popupClassName, setPopupClassName] = useState('');

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setPopupClassName(popupClassName ? '' : 'opened');
  }, [popup]);

  const showFullSizePic = (src, name) => {
    setPopup({ open: true, src: src, alt: name });
  };

  const removeFullSizePic = (e) => {
    setPopup({ open: false, src: '', alt: '' });
  };

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
  let [, ...restImages] = images;

  return (
    <>
      <article className='room-info__images'>
        {restImages.map((src, index) => (
          <div key={index} className='room-info__image-container'>
            <img
              className='room-info__img'
              src={src}
              alt={name}
              onClick={() => showFullSizePic(src, name)}
            />
          </div>
        ))}
      </article>
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
      {popup.open === true ? (
        <div
          style={{ top: window.pageYOffset }}
          className={'full-size-bg ' + popupClassName}
          onClick={removeFullSizePic}
        >
          <img className='full-size-pic' src={popup.src} alt={popup.name} />
        </div>
      ) : null}
    </>
  );
}
