import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../shared/inversed-btn/inversed-btn.component';
import CartItem from '../cart-item/cart-item.component';

// Reselector imports
import { createCartItems } from '../../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Check out!</CustomButton>
  </div>
);

// Destructure data, so we can simply return cartItems
const mapStateToProps = state => ({
  cartItems: createCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);