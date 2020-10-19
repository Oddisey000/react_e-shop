import React from 'react';
import { ReactComponent as ShoppingIcon } from './cart-icon.svg';

// Import Redux functionality
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

// Import reselect stuff
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount ? itemCount : ""}</span>
  </div>
);

// Function for getting number of items into cart icon
// Memoize selection optimization are in use (reselect)
// It is always better to create structured selector, because we doesn't know how many selectors we can have
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

// Redux functions
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); // null, we dont need the first value