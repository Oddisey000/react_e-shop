import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../../shared/inversed-btn/inversed-btn.component';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div 
      className="image"
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  <CustomButton inverted>{'Add to the cart'.toUpperCase()}</CustomButton>
  </div>
);

export default CollectionItem;
