import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className }) {
  return (
    <Link className={`${className} logo`} to='/'>
      The Shelter
    </Link>
  );
}
