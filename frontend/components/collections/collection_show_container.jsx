import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import find from 'lodash/find';

import { feedArticles, allFeeds } from '../../selectors/feed_selectors';
import { fetchFeed } from '../../actions/feeds_actions';
import { collectionFeed } from '../../selectors/collection_selectors';
import { fetchCollection } from '../../actions/collection_actions';

import CollectionShow from './collection_show';

const mapStateToProps = ({entities}, ownProps) => ({
  collection: collectionFeed(entities, ownProps),
  articles: feedArticles(entities)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: (collection) =>
    dispatch(fetchCollection(collection)),
  fetchFeed: (source) => dispatch(fetchFeed(source))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(CollectionShow));
