import React from 'react';
import './homepage.component.scss';

// This function should return the content automatically, because of ()
const HomePage = () => (
  <div className="homepage">
    <div className="menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Shop now!</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jackets</h1>
          <span className="subtitle">Shop now!</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Sneakers</h1>
          <span className="subtitle">Shop now!</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Women's</h1>
          <span className="subtitle">Shop now!</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Men's</h1>
          <span className="subtitle">Shop now!</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
