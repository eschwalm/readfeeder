import React from 'react';

import SavedArticleItem from './saved_article_item';

class SavedArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSavedArticles();
  }

  render() {
    const { saved } = this.props;

    return (
      <div>
        <h1 className="feed-index-title">Saved Articles</h1>
        <ul className="saved-articles-index">
          {saved.map( (article, i) => <SavedArticleItem
              key={i}
              article={article}
              saved={saved}/>)}
        </ul>
      </div>
    );
  }
}

export default SavedArticles;
