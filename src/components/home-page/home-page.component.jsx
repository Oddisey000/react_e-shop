import React from 'react';
import './home-page.component.scss';

import Menu from './menu/menu.component';

// This function should return the content automatically, because of ()
const HomePage = () => (
  <div className="homepage">
    <Menu />
  </div>
);

export default HomePage;
