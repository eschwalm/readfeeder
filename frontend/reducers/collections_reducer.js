import merge from 'lodash/merge';

import { RECEIVE_ALL_COLLECTIONS,
         RECEIVE_COLLECTION
       } from '../actions/collection_actions';

const CollectionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      return action.collection;
    default:
      return state;
  }
};

export default CollectionsReducer;