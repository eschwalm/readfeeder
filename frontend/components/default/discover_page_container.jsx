import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { fetchCollections } from '../../actions/collection_actions';
import { allFeeds } from '../../selectors/feed_selectors';
import {
  fetchFeed,
  fetchFeeds,
  fetchCollectionFeed } from '../../actions/feeds_actions';

import DiscoverPage from './discover_page';

const mapStateToProps = ({entities}) => ({
  collections: allCollections(entities),
  feeds: allFeeds(entities),
  articles: entities.articles
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchFeeds: () => dispatch(fetchFeeds()),
  fetchFeed: (feed) => dispatch(fetchFeed(feed)),
  fetchCollectionFeed: (id) => dispatch(fetchCollectionFeed(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiscoverPage)
);
