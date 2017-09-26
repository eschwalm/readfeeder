import React from 'react';

import CollectionFeedItem from './collection_feed_item';

const CollectionIndexItem = ({collection}) => (
  <li className="collection-index-item" key={collection.id}>
    <div className="collection-item-header">
      <i className="fa fa-angle-down" aria-hidden="true"></i>
      {collection.title}
    </div>
    <ul>
      {collection.feeds.map( (feed, id) =>
        <CollectionFeedItem key={id} feed={feed}/>
      )}
    </ul>
  </li>
);

export default CollectionIndexItem;
