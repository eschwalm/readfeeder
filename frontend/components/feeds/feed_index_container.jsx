import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allFeeds } from '../../selectors/feed_selectors';
import { fetchFeeds } from '../../actions/feeds_actions';
import { createCollection,
         fetchCollections
       } from '../../actions/collection_actions';
import { allCollections } from '../../selectors/collection_selectors';

import FeedIndex from './feed_index';

const mapStateToProps = ({entities}) => ({
  feeds: allFeeds(entities),
  collections: allCollections(entities)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeeds: () => dispatch(fetchFeeds()),
  fetchCollections: () => dispatch(fetchCollections()),
  createCollection: (collection) => dispatch(createCollection(collection))
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(FeedIndex));
