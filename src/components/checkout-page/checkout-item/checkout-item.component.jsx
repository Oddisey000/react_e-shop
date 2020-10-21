// Basic imports
import React from 'react';
import './checkout-item.styles.scss';

// Additional libraries imports
import { connect } from 'react-redux';

// Additional documents imports
import { clearItemFromCart, addCartItem, removeItem } from '../../../redux/cart/cart.actions';

// Passing whole cart items in order to make changes in all application parts from the component
// Also destructuring item into pieces
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  /**
   * Currently don't have access to cartItem element
   * Destructuring data inside the function and return visual part explicitly
   * onClick will use function created by mapDispatchToProps and then use cart action to do the work
   */
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  )};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);