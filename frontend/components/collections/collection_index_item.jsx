import React from 'react';

import { NavLink } from 'react-router-dom';

import CollectionFeedItem from './collection_feed_item';


const CollectionIndexItem = ({collection}) => (
  <li className="collection-index-item" key={collection.id}>
    <div className="collection-item-header">
      <i className="fa fa-angle-down" aria-hidden="true"></i>
      <NavLink
        to={{
          pathname: `/i/collections/${collection.title.toLowerCase()}`,
          collection
        }}>
        {collection.title}
      </NavLink>
    </div>
    <ul>
      {collection.feeds.map( (feed, id) =>
        <CollectionFeedItem key={id} feed={feed}/>
      )}
    </ul>
  </li>
);

export default CollectionIndexItem;
