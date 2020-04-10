import React from 'react';
import './menu.styles.scss';

// Import App data
import Data from '../../shared/data.js';

import MenuItem from '../menu-item/menu-item.component';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      // Generated data with images and paths for the menu
      sections: Data.sections
    }
  }

  render() {
    return (
      <div className="menu">
        {/** Spreading all the props in object and send it to menu item component */}
        {this.state.sections.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Menu;
