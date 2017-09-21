import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import SessionModal from './session_modal';


const mapStateToProps = (state, ownProps) => {
  const formType = (ownProps.formType === "login") ? "login" : "signup";
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const submitForm = (formType === "login") ? login : signup;
  return {
    submitForm: user => dispatch(submitForm(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal));
