import React from 'react';
import values from 'lodash/values';
import includes from 'lodash/includes';

import EditCollectionItem from './edit_collection_item';

class EditCollections extends React.Component {
  constructor(props) {
    super(props);

    this.feedsByCollection = this.feedsByCollection.bind(this);
  }

  feedsByCollection(collection, feeds) {
    let colFeeds = values(collection.feeds).map( feed => feed.feed_id);
    let currentFeeds = [];

    values(this.props.feeds).forEach( feed => {
      if (includes(colFeeds, feed.id)) {
        currentFeeds.push(feed);
      }
    });

    return currentFeeds;
  }

  render() {
    const { collections, feeds } = this.props;

    return (
      <div>
        {
          collections && feeds &&
          <div>
            <h1 className="feed-index-title">
              Organize Collections</h1>
            <ul className="edit-collection-container">
              {
                collections.map( (collection, i) => <EditCollectionItem
                key={i}
                collection={collection}
                feeds={this.feedsByCollection(collection)}
                deleteFeedFromCollection={this.props.deleteFeedFromCollection}
                />)
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default EditCollections;
