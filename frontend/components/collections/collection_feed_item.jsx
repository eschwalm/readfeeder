import React from 'react';

import { NavLink } from 'react-router-dom';

const CollectionFeedItem = ({feed}) => (
  <div>
    { feed && feed.name &&
      <div>
        <li className="collection-feed-item">
          <NavLink to={`/i/feeds/${feed.id}`}>
            {feed.name}
          </NavLink>
        </li>
      </div>
    }
  </div>
);

export default CollectionFeedItem;
