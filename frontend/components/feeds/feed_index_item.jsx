import React from 'react';

import { NavLink } from 'react-router-dom';
import FollowDropdownContainer from '../dropsdowns/follow_dropdown_container';

const FeedIndexItem = ({Feed}) => (
    <li className="feed-index-item">

        <div className="feed-index-menu">
          <img className="feed-index-icon"
            src={"https://icons.better-idea.org/icon" +
              `?url=${Feed.url}&size=70..120..200`}
              />
            <FollowDropdownContainer
              feedId={Feed.id}
              className="follow-dropdown-btn"
            />
        </div>

        <div className="feed-index-text">
          <NavLink
            to={{pathname: `/i/feeds/${Feed.id}`, name: Feed.name}}
            style={{ color: 'black' }}
            >
            <h6>{Feed.name}</h6>
          </NavLink>
          {Feed.description}
        </div>

    </li>
);

export default FeedIndexItem;
