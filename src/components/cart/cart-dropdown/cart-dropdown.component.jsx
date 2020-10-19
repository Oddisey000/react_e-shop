import React from 'react';
import { connect } from 'react-redux';

// Redux imports
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

import CustomButton from '../../shared/inversed-btn/inversed-btn.component';
import CartItem from '../cart-item/cart-item.component';
// Import high order component
import { withRouter } from 'react-router-dom';

// Reselector imports
import { createStructuredSelector } from 'reselect';
import { createCartItems } from '../../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

// Checking if cart is empty and give user message or cart items
const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : ( 
          <span className="empty-message">Your cart is empty</span> 
        )}
    </div>
    <CustomButton 
      onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}}>Check out!
    </CustomButton>
  </div>
);

// Destructure data, so we can simply return cartItems
const mapStateToProps = createStructuredSelector({
  cartItems: createCartItems
});

// We need to pass parameters to another component on route
export default withRouter(connect(mapStateToProps)(CartDropdown));