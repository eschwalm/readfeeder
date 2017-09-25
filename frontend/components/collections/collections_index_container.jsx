import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  allCollections,
  feedsbyCollection } from '../../selectors/collection_selectors';
import {
  fetchCollections,
  fetchCollectionFeeds } from '../../actions/collection_actions';

import CollectionsIndex from './collections_index';

const mapStateToProps = ({entities}) => ({
  collections: allCollections(entities),
  followedFeeds: feedsbyCollection(entities)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchCollectionFeeds: () => dispatch(fetchCollectionFeeds())
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(CollectionsIndex));
