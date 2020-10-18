import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <Link className='logo footer__logo' to='/'>
        The Shelter
      </Link>
    </footer>
  );
}
