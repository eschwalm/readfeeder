import merge from 'lodash/merge';

import { RECEIVE_FEEDS, RECEIVE_FEED } from '../actions/feeds_actions';

const FeedsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEEDS:
      return action.feeds.sources;
    case RECEIVE_FEED:
      return action.feed;
    default:
      return state;
  }
};

export default FeedsReducer;
