import React from 'react';
import { StoreContext } from '../store';

export default function RoomFilter() {
  const {
    rooms: [rooms],
    filter: [filter],
    handleChange,
    getUnqueValue,
    filterRooms,
  } = React.useContext(StoreContext);

  // console.log(filterRooms);

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = filter;

  const optionsType = ['all', ...getUnqueValue(rooms, 'type')];
  const optionsCapacity = getUnqueValue(rooms, 'capacity');

  return (
    <form className='filter section__filter'>
      {/* type of room */}
      <div className='filter-container__row'>
        <label className='filter__label'>
          <h4>Type of room</h4>
          <select name='type' id='type' value={type} onChange={handleChange}>
            {optionsType.map(value => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
        {/* guests */}
        <label className='filter__label'>
          <h4>Guests</h4>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            onChange={handleChange}
          >
            {optionsCapacity.map(value => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </label>
        {/* price */}
        <label className='filter__label'>
          <h4>Price up to {price}</h4>
          <input
            id='price'
            name='price'
            type='range'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </label>
      </div>
      {/* size */}
      <div className='filter-container__row'>
        <label className='filter__label filter__label_inline'>
          <h4 className='filter-container__title-size'>Room size</h4>
          <input
            className='input-size'
            type='number'
            name='minSize'
            value={minSize}
            onChange={handleChange}
          />
          {' - '}
          <input
            className='input-size'
            type='number'
            name='maxSize'
            value={maxSize}
            max={maxSize}
            onChange={handleChange}
          />
        </label>
        {/* extras */}
        <label className='filter__label filter__label_inline'>
          <input
            type='checkbox'
            name='breakfast'
            id='breakfast'
            checked={breakfast}
            onChange={handleChange}
          />
          <h4 className='filter-container__title-checkbox'>breakfast</h4>
        </label>
        <label className='filter__label filter__label_inline'>
          <input
            type='checkbox'
            name='pets'
            checked={pets}
            onChange={handleChange}
          />
          <h4 className='filter-container__title-checkbox'>pets</h4>
        </label>
      </div>
      <button className='btn-primary' onClick={filterRooms}>
        Search
      </button>
    </form>
  );
}
