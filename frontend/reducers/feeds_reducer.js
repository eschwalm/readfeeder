import merge from 'lodash/merge';

import { RECEIVE_FEEDS } from '../actions/feeds_actions';

const FeedsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEEDS:
      return action.feeds.sources;
    default:
      return state;
  }
};

export default FeedsReducer;
