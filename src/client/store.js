import React, { useState, useEffect, useRef } from 'react';
import items from './data';

export const StoreContext = React.createContext(null);
export default ({ children }) => {
  const [menu, setMenu] = useState([
    { title: 'Home', src: '/' },
    { title: 'Rooms', src: '/rooms' },
  ]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    setFilter({ ...filter, price: maxPrice, maxSize, maxPrice });
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setTimeout(() => setLoading(false), 2500);
  }, []);

  const [offset, setOffset] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset !== 0);
    };
  }, []);

  const formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = slug => {
    let tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  const handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = e.type === 'checkbox' ? target.checked : target.value;
    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    filterRooms();
  }, [filter]);

  const filterRooms = () => {
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
    let tempRooms = [...rooms];

    if (type !== 'all') tempRooms = tempRooms.filter(i => i.type === type);

    if (+capacity !== 1) {
      tempRooms = tempRooms.filter(i => i.capacity >= capacity);
    }

    setSortedRooms(tempRooms);
  };

  const getUnqueValue = (items, value) => {
    return [...new Set(items.map(i => i[value]))];
  };

  const store = {
    menu: [menu, setMenu],
    menuIsOpen: [menuIsOpen, setMenuIsOpen],
    rooms: [rooms, setRooms],
    sortedRooms: [sortedRooms, setSortedRooms],
    featuredRooms: [featuredRooms, setFeaturedRooms],
    loading: [loading, setLoading],
    offset: [offset, setOffset],
    filter: [filter, setFilter],
    getRoom,
    handleChange,
    getUnqueValue,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
