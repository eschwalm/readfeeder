import { combineReducers } from 'redux';

import feeds from './feeds_reducer';
import collections from './collections_reducer';

export default combineReducers({
  feeds,
  collections
});
