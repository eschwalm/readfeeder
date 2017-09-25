import React from 'react';

import { NavLink } from 'react-router-dom';
import FollowDropdownContainer from '../dropdowns/follow_dropdown_container';

const FeedIndexItem = ({feedId, Feed, Collections}) => (
    <li className="feed-index-item">

        <div className="feed-index-menu">
          <img className="feed-index-icon"
            src={"https://icons.better-idea.org/icon" +
              `?url=${Feed.url}&size=70..120..200`}
              />
            <FollowDropdownContainer
              feedId={feedId}
              feed={Feed}
              className="follow-dropdown-btn"
              collections={Collections}
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
