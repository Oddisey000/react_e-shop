import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {/** Only 4 items need to be rendered, that why filter is using */}
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...itemProps}) => (
        <CollectionItem key={id} {...itemProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
