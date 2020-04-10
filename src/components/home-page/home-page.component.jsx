import React from 'react';
import './home-page.styles.scss';

import Menu from './menu/menu.component';

// This function should return the content automatically, because of ()
const HomePage = ({ history }) => (
  <div className="homepage">
    <Menu history={history} />
  </div>
);

export default HomePage;
