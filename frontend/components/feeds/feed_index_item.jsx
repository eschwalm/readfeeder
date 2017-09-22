import React from 'react';

const FeedIndexItem = ({Feed}) => (
  <li className="feed-index-item">
    <div>
      <img className="feed-index-icon"
        src={"https://icons.better-idea.org/icon" +
          `?url=${Feed.url}&size=70..120..200`}
          />
    </div>

  <span className="feed-index-text">
    <h6>{Feed.name}</h6>
    {Feed.description}
  </span>
  </li>
);

export default FeedIndexItem;
