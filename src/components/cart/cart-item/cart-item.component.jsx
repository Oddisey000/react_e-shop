// Import required js libraries
import React from 'react';

// Import style
import './cart-item.styles.scss';

// Create a cart item template
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"/>
    <div className="item-details">
    <span className="name">{name}</span>
    <span className="price">{quantity} x ${price}</span>
    </div>
  </div>
);

// Export created component
export default CartItem;