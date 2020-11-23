import React from 'react';
import { FiMenu } from 'react-icons/fi';
import Menu from './Menu';
import { StoreContext } from '../store';
import Logo from './Logo';

export default function NavBar() {
  const {
    menuIsOpen: [menuIsOpen],
    offset: [offset],
    handleToggleMenu,
  } = React.useContext(StoreContext);

  return (
    <nav className={`header${offset || menuIsOpen ? ' scrolled' : ''}`}>
      <div className='header__container center-container'>
        <Logo className='header__logo' />
        <button
          className='menu-btn header__menu-btn'
          onClick={handleToggleMenu}
        >
          <FiMenu className='menu-btn__icon' />
        </button>
        <Menu />
      </div>
    </nav>
  );
}
