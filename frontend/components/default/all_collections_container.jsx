import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { fetchCollections } from '../../actions/collection_actions';
import { followedFeeds } from '../../selectors/feed_selectors';
import { fetchCollectionFeed } from '../../actions/feeds_actions';
import { savedArticles } from '../../selectors/article_selectors';
import { fetchSavedArticles } from '../../actions/article_actions';

import AllCollections from './all_collections';

const mapStateToProps = ({entities}) => ({
  collections: allCollections(entities),
  feeds: followedFeeds(entities),
  saved: savedArticles(entities)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchCollectionFeed: () => dispatch(fetchCollectionFeed()),
  fetchSavedArticles: () => dispatch(fetchSavedArticles())
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(AllCollections));
