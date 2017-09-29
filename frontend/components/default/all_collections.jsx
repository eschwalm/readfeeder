import React from 'react';
import CollectionShow from '../collections/collection_show';

class AllCollections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      collections,
      feeds,
      saved,
      fetchCollections,
      fetchCollectionFeed } = this.props;

    return (
      <div>
        <h1 className="feed-index-title">All</h1>
        <CollectionShow
           collections={collections}
           feeds={feeds}
           saved={saved}
           fetchCollections={fetchCollections}
           fetchCollectionFeed={fetchCollectionFeed}
           />
      </div>
    );
  }
}

export default AllCollections;
