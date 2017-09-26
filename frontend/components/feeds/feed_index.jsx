import React from 'react';

import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeeds();
    this.props.fetchCollections();
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

  collectionTitles(collections) {
    return Object.keys(collections).map( id => collections[id]['title'] );
  }


  render() {

    const { feeds, collections } = this.props;

    return (
      <div>

        <h1 className="feed-index-title">Add New Sources</h1>

        <label style={{marginLeft: "5%"}}><h4>
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
