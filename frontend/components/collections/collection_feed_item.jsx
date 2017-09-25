import React from 'react';

import { NavLink } from 'react-router-dom';

const CollectionFeedItem = ({feed}) => (
  <li className="collection-feed-item">
    <NavLink to={`/i/feeds/${feed.feed_id}`}>
      {feed.feed_id}
    </NavLink>
  </li>
);

export default CollectionFeedItem;
