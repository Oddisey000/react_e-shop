import React from 'react';
import './menu.component.scss';

// Import the images
import Images from '../../shared/img/img.component';

import MenuItem from '../menu-item/menu-item.component';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      // Generated data with images and paths for the menu
      sections: [
        {
          title: 'hats',
          imageUrl: Images.homePage.Hats,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: Images.homePage.Jackets,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: Images.homePage.Sneakers,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: Images.homePage.Womens,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: Images.homePage.Mens,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className="menu">
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Menu;
