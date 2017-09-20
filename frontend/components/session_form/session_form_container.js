import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionModal from './session_modal';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: user => dispatch(login(user)),
    logout: user => dispatch(logout(user)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
