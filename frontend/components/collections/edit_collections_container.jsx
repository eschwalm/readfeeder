import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createCollection,
  updateCollection,
  deleteCollection,
  deleteFeedFromCollection } from '../../actions/collection_actions';
import { allCollections } from '../../selectors/collection_selectors';
import { followedFeeds } from '../../selectors/feed_selectors';
import EditCollections from './edit_collections';

const mapStateToProps = ({entities}) => ({
  collections: allCollections(entities),
  feeds: followedFeeds(entities)
});

const mapDispatchToProps = dispatch => ({
  updateCollection: collection => dispatch(updateCollection(collection)),
  deleteCollection: id => dispatch(deleteCollection(id)),
  deleteFeedFromCollection: collectionFeed =>
    dispatch(deleteFeedFromCollection(collectionFeed)),
  createCollection: (collection) => dispatch(createCollection(collection))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditCollections)
);
