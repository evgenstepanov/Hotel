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
      </div>
    </form>
  );
}
