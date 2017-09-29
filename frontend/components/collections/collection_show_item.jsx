import React from 'react';
import { NavLink } from 'react-router-dom';

import SaveArticleButtonContainer
  from '../articles/save_article_button_container';

const CollectionShowItem = ({article, saved}) => (
  <li className="feed-show-item">
    <div >
      <img className="feed-index-image" src={article.urlToImage}/>
    </div>
    <span className="feed-index-text">
      <SaveArticleButtonContainer
        article={article}
        source={article.src}
        saved={saved}
        />
      <h5>{article.title}</h5>
      <span
        className="collection-show-detail"
        style={{display: "inline-flex"}}>
        <NavLink
          style={{paddingRight: "5px"}}
          to={`/i/feeds/${article.src}`}>
          {article.src}
        </NavLink>
        {
          article.author &&
          <div>{'  / '} by {article.author}</div>
        }
      </span><br/>

      {article.description}
    </span>
  </li>
);

export default CollectionShowItem;
