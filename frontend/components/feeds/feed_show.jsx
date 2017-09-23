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
    console.log(source);
    console.log(articles);
    return (
      <ul>
        <h1 className="feed-index-title">{source}</h1>
        { articles.map(
           (article, id) => <FeedShowItem key={id} article={article}/>)
        }
      </ul>
    );
  }
}

export default FeedShow;
