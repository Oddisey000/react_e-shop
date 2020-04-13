import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
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
      {
        currentUser ?
          /** Using inbuild firebase sign out method if user want to log out */
          <div className="option" onClick={() => auth.signOut()}>{'Sign Out'.toUpperCase()}</div>
        :
          <Link className="option" to="/auth">{'Sign In'.toUpperCase()}</Link>
      }
    </div>
  </div>
);

export default Header;
