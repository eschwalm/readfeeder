import React from 'react';

import SaveArticleButtonContainer
  from '../articles/save_article_button_container';

const FeedShowItem = ({article, source, saved}) => (
  <li className="feed-show-item">
    <div >
      <img className="feed-index-image" src={article.urlToImage}/>
    </div>
    <span className="feed-index-text">
      <SaveArticleButtonContainer
        article={article}
        source={source}
        saved={saved}
        />
      <h5>{article.title}</h5>
        {
          article.author &&
          <div style={{paddingBottom: "5px"}}> by {article.author}</div>
        }
      {article.description}
    </span>
    <a
      target="_blank"
      className="save-article-button"
      style={{fontSize: "18px", color: "#ccc", textDecoration: "none"}}
      href={article.url}>
      <i className="fa fa-external-link" aria-hidden="true"></i></a>
  </li>
);

export default FeedShowItem;
