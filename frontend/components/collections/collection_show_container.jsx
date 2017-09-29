import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LOCATION_CHANGE } from 'react-router-redux';
import values from 'lodash/values';

import {
  feedArticles,
  allFeeds,
  collectionFeeds } from '../../selectors/feed_selectors';
import { fetchFeed, fetchCollectionFeed } from '../../actions/feeds_actions';
import { collectionFeed } from '../../selectors/collection_selectors';
import {
  fetchCollection,
  fetchCollections } from '../../actions/collection_actions';

import CollectionShow from './collection_show';

const mapStateToProps = ({entities}, {match}) => ({
    collection: collectionFeed(entities, match),
    feeds: collectionFeeds(entities, match),
    articles: feedArticles(entities)
});


const mapDispatchToProps = (dispatch) => ({
  fetchCollection: (collection) =>
    dispatch(fetchCollection(collection)),
  fetchCollectionFeed: (source) => dispatch(fetchCollectionFeed(source)),
  fetchCollections: () => dispatch(fetchCollections())
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(CollectionShow));
