import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { fetchCollections } from '../../actions/collection_actions';
import { followedFeeds } from '../../selectors/feed_selectors';
import { fetchFeeds } from '../../actions/feeds_actions';
import { savedArticles } from '../../selectors/article_selectors';
import { fetchSavedArticles } from '../../actions/article_actions';

import CollectionsIndex from './collections_index';

const mapStateToProps = ({entities}) => ({
  collections: allCollections(entities),
  feeds: followedFeeds(entities),
  saved: savedArticles(entities)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchFeeds: () => dispatch(fetchFeeds()),
  fetchSavedArticles: () => dispatch(fetchSavedArticles())
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(CollectionsIndex));
