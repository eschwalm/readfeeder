import React from 'react';
import merge from 'lodash/merge';
import includes from 'lodash/includes';
import find from 'lodash/find';

class SaveArticleButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.isFollowed = this.isFollowed.bind(this);
  }

  componentWillMount() {

  }


  componentDidMount() {

  }

  isFollowed() {
    let savedUrls = this.props.saved.map( article => article.url);
    if (this.props.article) {
      if (includes(savedUrls, this.props.article.url)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    let article= merge(
      {}, this.props.article, {source: this.props.source});
    let savedArticle = find(
      this.props.saved,
      {url: this.props.article.url});

    return (this.isFollowed()) ?
    this.props.removeArticle(savedArticle.id) :
    this.props.saveArticle(article);
  }

  displayButton() {
    return (this.isFollowed()) ?
    (<i className="fa fa-bookmark" aria-hidden="true"></i>) :
    (<i className="fa fa-bookmark-o" aria-hidden="true"></i>);
  }

  render() {
    const { saved, article } = this.props;

    return(
      <div>
        {  article && saved &&
          <div>
            <button
              onClick={this.handleClick}
              className="save-article-button"
              style={{color: "#aaa"}}>
              {this.displayButton()}
            </button>
          </div>
        }
      </div>
    );
  }
}

SaveArticleButton.defaultProps = {
  article: {url: "url"}
};

export default SaveArticleButton;
