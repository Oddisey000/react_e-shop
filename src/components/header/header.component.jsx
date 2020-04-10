import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        <span>{'Shop'.toUpperCase()}</span>
      </Link>
      <Link className="option" to="/shop">
        <span>{'Contact'.toUpperCase()}</span>
      </Link>
    </div>
  </div>
);

export default Header;
