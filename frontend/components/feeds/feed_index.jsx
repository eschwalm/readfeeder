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
      <div>
        <h1 className="feed-index-title">Add New Sources</h1>
        <ul className="feed-index">
          {feeds.map( (feed, id) => <FeedIndexItem key={id} Feed={feed}/>)}
        </ul>
      </div>
    );
  }
}

export default FeedIndex;
