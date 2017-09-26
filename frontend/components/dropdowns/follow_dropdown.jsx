import React from 'react';
import CollectionsIndexContainer
  from '../collections/collections_index_container';
import values from 'lodash/values';

class FollowDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCollection(this.state);
  }

  collectionList() {
    let collections = this.props.collections;
    let titles = Object.keys(collections)
                  .map( id => collections[id]);
    return titles;
  }

  feedFollowed(collection, feed) {
    for (let i = 0; i < collection.feeds.length; i++) {
      if (collection.feeds[i].feed_id === this.props.feed.id) {
        return (
          <button
            className="dropdown-collection-item-remove"
            onClick={
              () => this.props.deleteFeedFromCollection(
                { collectionId: collection.id, feedId: feed.id}
              )}><i className="fa fa-minus-circle" aria-hidden="true"></i>
          </button>);
      }
    }
    return (
      <button
        className="dropdown-collection-item-add"
        onClick={
          () => this.props.addFeedToCollection(
            { collectionId: collection.id, feedId: feed.id}
          )}><i className="fa fa-plus-circle" aria-hidden="true"></i>
      </button>);
  }

  render() {
    const { feed } = this.props;

    return (
      <div className="follow-dropdown">
        <div className="dropdown">
          <button
            className="btn-sm btn-outline-success dropdown-toggle"
            type="button"
            data-toggle="dropdown">
            Follow
            <span className="caret"></span></button>
            <ul className="dropdown-menu dropdown-menu-right">

                {this.collectionList().map( (collection, id) =>
                  <li key={id}>
                    <i className="fa fa-rss" aria-hidden="true"></i>
                    {collection.title}
                    {
                      (this.feedFollowed(collection, feed))
                    }
                  </li>
                )}


              <li className="dropdown-divider"></li>


            </ul>
          </div>
      </div>
    );
  }
}

export default FollowDropdown;
