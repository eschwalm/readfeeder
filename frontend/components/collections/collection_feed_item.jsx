import React from 'react';

import { NavLink } from 'react-router-dom';

const CollectionFeedItem = ({feed}) => (
  <div>
    { feed && feed.name &&
      <div>
        <NavLink to={`/i/feeds/${feed.id}`}>
          <li className="collection-feed-item">
            <img className="collection-feed-icon"
              src={"https://icons.better-idea.org/icon" +
                `?url=${feed.url}&size=70..120..200`}
                />
            <div className="collection-feed-name">
              {feed.name}
            </div>
          </li>
        </NavLink>
      </div>
    }
  </div>
);

export default CollectionFeedItem;
