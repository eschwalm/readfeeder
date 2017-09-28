import React from 'react';

import { NavLink } from 'react-router-dom';

import CollectionFeedItem from './collection_feed_item';


const CollectionIndexItem = ({collection, feeds}) => (
  <li className="collection-index-item" key={collection.id}>


      <NavLink
        to={{
          pathname: `/i/collections/${collection.title.toLowerCase()}`,
          collection
        }}
        >

        <div className="collection-item-title">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          {collection.title}
        </div>
      </NavLink>

    <ul className="collection-index-feeds">
      {collection.feeds && collection.feeds.map( (src, id) =>
        <CollectionFeedItem key={id} feed={feeds[src.feed_id]}/>
      )}
    </ul>
  </li>
);

export default CollectionIndexItem;
