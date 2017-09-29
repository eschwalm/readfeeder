import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  updateCollection,
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
  deleteFeedFromCollection: collectionFeed =>
    dispatch(deleteFeedFromCollection(collectionFeed))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditCollections)
);
