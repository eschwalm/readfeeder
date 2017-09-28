import merge from 'lodash/merge';

import {
  RECEIVE_FEEDS,
  RECEIVE_FEED,
  RECEIVE_COLLECTION_FEED } from '../actions/feeds_actions';
import { LOCATION_CHANGE } from 'react-router-redux';

const FeedsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEEDS:
      return action.feeds.sources;
    case RECEIVE_FEED:
      return merge({}, state, action.feed);
    case RECEIVE_COLLECTION_FEED:
      return merge({}, state, {[action.feed.source]: action.feed.articles});
    default:
      return state;
  }
};

export default FeedsReducer;
