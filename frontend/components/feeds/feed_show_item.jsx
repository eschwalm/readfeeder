import React from 'react';

const FeedShowItem = ({article}) => (
  <li className="feed-show-item">
    <div >
      <img className="feed-index-image" src={article.urlToImage}/>
    </div>
    <span className="feed-index-text">
      <h5>{article.title}</h5>
      {article.description}
    </span>
  </li>
);

export default FeedShowItem;
