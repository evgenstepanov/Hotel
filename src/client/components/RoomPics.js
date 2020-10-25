import React, { useState, useEffect, useRef } from 'react';

export default function RoomPics({ images }) {
  const [popup, setPopup] = useState({
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
    setPopupClassName(popupClassName ? '' : ' opened');
  }, [popup]);

  const showFullSizePic = (src, name) => {
    setPopup({ src: src, alt: name });
  };

  const removeFullSizePic = () => {
    setPopup({ src: '', alt: '' });
  };

  return (
    <>
      <article className='room-info__images'>
        {images.map((src, index) => (
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
      <>
        {popup.src ? (
          <div
            className={'full-size-bg' + popupClassName}
            onClick={removeFullSizePic}
          >
            <img className='full-size-pic' src={popup.src} alt={popup.name} />
          </div>
        ) : null}
      </>
    </>
  );
}
