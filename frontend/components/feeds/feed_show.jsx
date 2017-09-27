import React from 'react';

import FeedShowItem from './feed_show_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.source);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.source !==
        nextProps.match.params.source) {
      this.props.fetchFeed(nextProps.match.params.source);
    }
  }

  render() {
    const {articles} = this.props;
    const source = this.props.match.params.source;

    return (
      <div>
        <h1 className="feed-index-title">{source}</h1>
          <ul className="feed-show-content">
          { articles.map(
             (article, id) => <FeedShowItem
             key={`${source}-${id}`}
             article={article}/>)
          }
        </ul>
      </div>
    );
  }
}

export default FeedShow;
