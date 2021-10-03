import React from 'react';
import Pagelogo from './Pagelogo';
import Navbar from './Navigation';
import '../assets/styles/header.css';

const Header = () => (
  <header>
    <Pagelogo />
    <Navbar className="link-section" />
  </header>
);
export default Header;
