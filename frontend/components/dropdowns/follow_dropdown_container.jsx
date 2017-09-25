import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { createCollection,
         fetchCollections,
         addFeedToCollection
       } from '../../actions/collection_actions';
import { addFeed } from '../../actions/feeds_actions';
import { followedFeeds } from '../../selectors/feed_selectors';


import FollowDropdown from './follow_dropdown';

const mapStateToProps = (state, { match }) => ({
  // collections: allCollections(state),
  // followedFeeds: followedFeeds(state),
  sourceId: parseInt(match.params.sourceId)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  createCollection: collection => dispatch(createCollection()),
  addFeedToCollection:
    collectionFeed => dispatch(addFeedToCollection(collectionFeed)),
  addFeed: feed => dispatch(addFeed(feed))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowDropdown)
);