import merge from 'lodash/merge';

import {
  RECEIVE_SAVED_ARTICLES,
  RECEIVE_ARTICLE
} from '../actions/article_actions';

export const ArticlesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SAVED_ARTICLES:
      return action.saved;
    case RECEIVE_ARTICLE:
    return merge({}, state, action.saved);
    default:
      return state;
  }
};

export default ArticlesReducer;
