import React from 'react';

import CollectionIndexItem from './collection_index_item';

class CollectionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const {collections} = this.props;
    return (
      <ul className="collection-index">
        {collections.map( (collection, id) =>
          <CollectionIndexItem key={id} collection={collection}/>
        )}
      </ul>
    );
  }
}

export default CollectionsIndex;
