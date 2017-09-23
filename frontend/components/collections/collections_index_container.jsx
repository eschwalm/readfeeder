import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { allCollections } from '../../selectors/collection_selectors';
import { fetchCollections } from '../../actions/collection_actions';
import CollectionsIndex from './collections_index';

const mapStateToProps = ({entities}) => ({
  collections: allCollections(entities)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default withRouter(
  connect(mapStateToProps,
    mapDispatchToProps)(CollectionsIndex));
