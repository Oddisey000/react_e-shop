import React from 'react';
import { ReactComponent as ShoppingIcon } from './cart-icon.svg';

// Import Redux functionality
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"></span>
  </div>
);

// Redux functions
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon); // null, we dont need the first value