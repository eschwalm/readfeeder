import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';

import FollowDropdown from './follow_dropdown';

const mapStateToProps = (state, { match }) => ({
  collections: allCollections(state),
  sourceId: parseInt(match.params.sourceId)
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(mapStateToProps, null)(FollowDropdown)
);
