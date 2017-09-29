// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
//
// import { allCollections } from '../../selectors/collection_selectors';
// import { fetchCollections } from '../../actions/collection_actions';
// import { followedFeeds } from '../../selectors/feed_selectors';
// import { fetchCollectionFeed } from '../../actions/feeds_actions';
// import { savedArticles } from '../../selectors/article_selectors';
// import { fetchSavedArticles } from '../../actions/article_actions';
//
// import AllCollections from './all_collections';
//
// const mapStateToProps = ({entities}) => ({
//   collection: allCollections(entities),
//   feeds: followedFeeds(entities),
//   saved: savedArticles(entities)
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchCollections: () => dispatch(fetchCollections()),
//   fetchCollectionFeed: (feed) => dispatch(fetchCollectionFeed(feed)),
//   fetchSavedArticles: () => dispatch(fetchSavedArticles())
// });
//
// export default withRouter(
//   connect(mapStateToProps,
//     mapDispatchToProps)(AllCollections));

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LOCATION_CHANGE } from 'react-router-redux';
import values from 'lodash/values';

import {
  followedFeeds,
  feedArticles,
  allFeeds,
  collectionFeeds } from '../../selectors/feed_selectors';
import { fetchFeed, fetchCollectionFeed } from '../../actions/feeds_actions';
import {
  collectionFeed,
  allCollections } from '../../selectors/collection_selectors';
import {
  fetchCollection,
  fetchCollections } from '../../actions/collection_actions';

import AllCollections from './all_collections';

const mapStateToProps = ({entities}, {match}) => ({
    collection: allCollections(entities),
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
    mapDispatchToProps)(AllCollections));
