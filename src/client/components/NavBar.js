import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { FiMenu } from 'react-icons/fi';
import Menu from './Menu';
import { StoreContext } from '../store';

export default function NavBar() {
  const {
    menuIsOpen: [menuIsOpen, setMenuIsOpen],
  } = React.useContext(StoreContext);

  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className='header'>
      <div className='center'>
        <Link className='logo' to='/'>
          <img className='logo__img' src={logo} alt='logo' />
        </Link>
        <button className='menu-btn header__menu-btn' onClick={handleToggle}>
          <FiMenu className='menu-btn__icon' />
        </button>
      </div>
      <Menu />
    </header>
  );
}
