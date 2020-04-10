import React from 'react';

import Data from '../shared/data.js';
import CollectionPreview from './collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Data.shopData
    }
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({id, ...collectionsProps}) => (
          <CollectionPreview key={id} {...collectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
