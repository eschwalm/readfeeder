import merge from 'lodash/merge';

import { RECEIVE_ALL_COLLECTIONS,
         RECEIVE_COLLECTION,
         REMOVE_COLLECTION
       } from '../actions/collection_actions';

const CollectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      newState[action.collection.id] = action.collection;
      return newState;
    case REMOVE_COLLECTION:
      delete newState[action.collection.id];
      return newState;
    default:
      return state;
  }
};

export default CollectionsReducer;
