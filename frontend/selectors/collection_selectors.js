import values from 'lodash/values';

export const allCollections = state => {
  let collections = values(state.collections);
  return collections;
};
