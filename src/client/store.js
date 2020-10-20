import React, { useState, useEffect } from 'react';
import items from './data';

export const StoreContext = React.createContext(null);
export default ({ children }) => {
  let initialMenu = [
    { title: 'Home', src: '/' },
    { title: 'Rooms', src: '/rooms' },
  ];
  const [menu, setMenu] = useState(initialMenu);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
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

  const formatData = () => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const store = {
    menu: [menu, setMenu],
    menuIsOpen: [menuIsOpen, setMenuIsOpen],
    rooms: [rooms, setRooms],
    sortedRooms: [sortedRooms, setSortedRooms],
    featuredRooms: [featuredRooms, setFeaturedRooms],
    loading: [loading, setLoading],
    offset: [offset, setOffset],
    getRoom,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
