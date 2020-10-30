import React from 'react';
import { StoreContext } from '../store';

export default function RoomFilter() {
  const {
    rooms: [rooms],
    filter: [filter],
    handleChange,
    getUnqueValue,
  } = React.useContext(StoreContext);

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
    <form className='filter'>
      <div className='filter-container'>
        {/* type of room */}
        <label htmlFor='type'>Type of room</label>
        <select name='type' id='type' value={type} onChange={handleChange}>
          {optionsType.map(value => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        {/* guests */}
        <label htmlFor='capacity'>Guests</label>
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
        {/* price */}
        <label htmlFor='price'>Price up to {price}</label>
        <input
          id='price'
          name='price'
          type='range'
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleChange}
        />
        {/* size */}
        <label htmlFor='size'>room size </label>
        <input
          type='number'
          name='minSize'
          value={minSize}
          onChange={handleChange}
        />
        <input
          type='number'
          name='maxSize'
          value={maxSize}
          onChange={handleChange}
        />
        {/* extras */}
        <input
          type='checkbox'
          name='breakfast'
          id='breakfast'
          checked={breakfast}
          onChange={handleChange}
        />
        <label htmlFor='breakfast'>breakfast</label>
        <input
          type='checkbox'
          name='pets'
          checked={pets}
          onChange={handleChange}
        />
        <label htmlFor='breakfast'>pets</label>
      </div>
    </form>
  );
}
