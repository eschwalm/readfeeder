import React from 'react';

const FeedShowItem = ({article}) => (
  <li className="feed-index-item">
    <div >
      <img className="feed-index-image" src={article.urlToImage}/>
    </div>
    <span className="feed-index-text">
      <h6>{article.title}</h6>
      {article.description}
    </span>
  </li>
);

export default FeedShowItem;
