import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { createCollection,
         fetchCollections,
         addFeedToCollection
       } from '../../actions/collection_actions';

import FollowDropdown from './follow_dropdown';

const mapStateToProps = (state, { match }) => ({
  // collections: allCollections(state),
  sourceId: parseInt(match.params.sourceId)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  createCollection: collection => dispatch(createCollection()),
  addFeedToCollection: collectionFeed => dispatch(addFeedToCollection())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowDropdown)
);
