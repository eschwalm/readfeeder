import React from 'react';

import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }


  render() {
    const { feeds } = this.props;

    return (
      <ul className="feed-index">
        <h1 className="feed-index-title">Discover Sources</h1>
        {feeds.map( (feed, id) => <FeedIndexItem key={id} Feed={feed}/>)}
      </ul>
    );
  }
}

export default FeedIndex;
