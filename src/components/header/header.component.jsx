import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.scss';

// Cart imports
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';

// Redux imports
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, cartHidden }) => (
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
      <CartIcon />
    </div>
    {/** Render cartDropdown component accordingly */}
    {cartHidden ? null : <CartDropdown />}
  </div>
);

/**
 * Destructuring data from the reducer
 * First go root reducer, then property name from combineReducers function
 * The second option is a parameter from the reducer for example 'auth: currentUser'
 * And finaly paste data to mapStateToProps function
 */
const mapStateToProps = ({auth: {currentUser}, cart: {cartHidden}}) => ({
  currentUser,
  cartHidden
});

export default connect(mapStateToProps)(Header);
