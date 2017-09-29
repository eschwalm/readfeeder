import React from 'react';
import values from 'lodash/values';
import includes from 'lodash/includes';

import EditCollectionItem from './edit_collection_item';

class EditCollections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.feedsByCollection = this.feedsByCollection.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCollection(this.state);
    this.setState({title: ""});
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

            <div style={{marginLeft: "5%"}}>
              <label><h4>
                Create a New Collection</h4></label>
              <form
                onSubmit={this.handleSubmit}
                className="create-collection-form"
                >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Collection Name"
                    aria-describedby="basic-addon2"
                    onChange={this.update('title')}
                    />
                  <input
                    className="input-group-addon"
                    id="basic-addon2"
                    type="submit"/>
                </div>
              </form>
            </div>
            <ul className="edit-collection-container">
              {
                collections.map( (collection, i) => <EditCollectionItem
                key={i}
                collection={collection}
                feeds={this.feedsByCollection(collection)}
                deleteFeedFromCollection={this.props.deleteFeedFromCollection}
                updateCollection={this.props.updateCollection}
                deleteCollection={this.props.deleteCollection}
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
