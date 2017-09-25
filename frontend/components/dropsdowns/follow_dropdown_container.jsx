import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { createCollection,
         fetchCollections
       } from '../../actions/collection_actions';

import FollowDropdown from './follow_dropdown';

const mapStateToProps = (state, { match }) => ({
  // collections: allCollections(state),
  sourceId: parseInt(match.params.sourceId)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  createCollection: collection => dispatch(createCollection())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowDropdown)
);
