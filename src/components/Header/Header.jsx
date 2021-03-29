import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header__container">
      <Link to="/">
        <span className="header__title">JS Band Store</span>
      </Link>
      <CartButton />
    </div>
  </div>
);

export default Header;
