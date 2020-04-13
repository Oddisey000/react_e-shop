import React from 'react';
import './inversed-btn.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // Checks if component receice props isGoogleSignIn. if so then apply additional style
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} inversed-btn`} {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
