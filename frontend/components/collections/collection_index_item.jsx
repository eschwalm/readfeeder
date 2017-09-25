import React from 'react';

const CollectionIndexItem = ({collection}) => (
  <li className="collection-index-item" key={collection.id}>
    {collection.title}
  </li>
);

export default CollectionIndexItem;
