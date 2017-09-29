import React from 'react';

import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchFeeds();
    this.props.fetchCollections();
  }

  collectionTitles(collections) {
    return Object.keys(collections).map( id => collections[id]['title'] );
  }


  render() {

    const { feeds, collections } = this.props;

    return (
      <div>

        <h1 className="feed-index-title">Add New Sources</h1>

        <ul className="feed-index">
          {feeds.map( (feed, id) =>
            <FeedIndexItem
              key={id}
              feedId={id}
              Feed={feed}
              Collections={collections}/>)}
        </ul>
      </div>
    );
  }
}

export default FeedIndex;
