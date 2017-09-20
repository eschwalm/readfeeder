import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const defaultState = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
