import React, { useState } from 'react';
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  let initialMenu = [
    { title: 'Home', src: '/' },
    { title: 'Rooms', src: '/rooms' },
  ];
  const [menu, setMenu] = useState(initialMenu);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const store = {
    menu: [menu, setMenu],
    menuIsOpen: [menuIsOpen, setMenuIsOpen],
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
