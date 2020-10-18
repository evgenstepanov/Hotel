import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { FiMenu } from 'react-icons/fi';
import Menu from './Menu';
import { StoreContext } from '../store';

export default function NavBar() {
  const {
    menuIsOpen: [menuIsOpen, setMenuIsOpen],
    offset: [offset],
  } = React.useContext(StoreContext);

  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className={`header${offset ? ' scrolled' : ''}`}>
      <div className='header__container center-container'>
        <Link className='logo' to='/'>
          The Shelter
        </Link>
        <button className='menu-btn header__menu-btn' onClick={handleToggle}>
          <FiMenu className='menu-btn__icon' />
        </button>
        <Menu />
      </div>
    </header>
  );
}
