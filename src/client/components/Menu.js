import React from 'react';
import { StoreContext } from '../store';
import { Link } from 'react-router-dom';

export default function Menu() {
  const {
    menu: [menu],
    menuIsOpen: [menuIsOpen],
  } = React.useContext(StoreContext);

  return (
    <ul className={'menu header__menu' + (menuIsOpen ? ' open' : '')}>
      {menu.map((item) => (
        <Link className='menu__link' key={item.title} to={item.src}>
          {item.title}
        </Link>
      ))}
    </ul>
  );
}
