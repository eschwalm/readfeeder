import React from 'react';

import SaveArticleButtonContainer from './save_article_button_container';

class SavedArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSavedArticles();
  }

  render() {
    return (
      <div>
        <h1>Saved Articles Page!</h1>
        <SaveArticleButtonContainer />
      </div>
    );
  }
}

export default SavedArticles;
