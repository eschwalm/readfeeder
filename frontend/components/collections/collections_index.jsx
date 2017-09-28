import React from 'react';

import CollectionIndexItem from './collection_index_item';

class CollectionsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchCollections();
    this.props.fetchFeeds();
  }

  render() {
    const {collections} = this.props;

    return (
      <ul className="collection-index">
        {collections.map( (collection, id) =>
          <CollectionIndexItem
            key={id}
            collection={collection}
            feeds={this.props.feeds}/>
        )}
      </ul>
    );
  }
}

export default CollectionsIndex;
