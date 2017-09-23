import React from 'react';

import { NavLink } from 'react-router-dom';

const FeedIndexItem = ({Feed}) => (
    <li className="feed-index-item">
        <div>
          <img className="feed-index-icon"
            src={"https://icons.better-idea.org/icon" +
              `?url=${Feed.url}&size=70..120..200`}
              />
        </div>
        <NavLink
          to={{pathname: `/i/feeds/${Feed.id}`, name: Feed.name}}
          style={{ textDecoration: 'none' }}
          className="feed-index-text"
          >

          <h6>{Feed.name}</h6>
          {Feed.description}
      </NavLink>
    </li>
);

export default FeedIndexItem;
