import React from 'react';

import CustomButton from '../../shared/inversed-btn/inversed-btn.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Check out!</CustomButton>
  </div>
);

export default CartDropdown;