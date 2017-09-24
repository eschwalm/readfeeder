import React from 'react';

import FeedShowItem from './feed_show_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.sourceId);
  }

  render() {
    const {articles} = this.props;
    const source = this.props.match.params.sourceId;

    return (
      <div>
        <h1 className="feed-index-title">{source}</h1>
          <ul className="feed-show-content">
          { articles.map(
             (article, id) => <FeedShowItem key={id} article={article}/>)
          }
        </ul>
      </div>
    );
  }
}

export default FeedShow;
