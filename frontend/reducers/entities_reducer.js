import { combineReducers } from 'redux';

import feeds from './feeds_reducer';
import collections from './collections_reducer';
import saved from './articles_reducer';

export default combineReducers({
  feeds,
  collections,
  saved
});
