import React from 'react';
import './menu-item.component.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    {/* A hack, increase image but don't touch text inside content. Thats why I close the div element imediately */}
    <div
      className="background-image"
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop now!</span>
    </div>
  </div>
);

export default MenuItem;
