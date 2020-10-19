import React from 'react';

// Import third party libraries in the component
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import selectors
import { createCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

// Import components
import CheckoutItem from './checkout-item/checkout-item.component';

import './checkout-page.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>Product</span>
      </div>
      <div className="checkout-block">
        <span>Description</span>
      </div>
      <div className="checkout-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-block">
        <span>Price</span>
      </div>
      <div className="checkout-block">
        <span>Remove</span>
      </div>
    </div>
      {cartItems.map(cartItem =>
        // Taking each item from the array and pass it inside component responsible for rendering items
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
    <div className="total">
      <span>Total: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: createCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);