import values from 'lodash/values';
import find from 'lodash/find';

export const allCollections = state => {
  let collections = values(state.collections);
  return collections;
};

export const collectionFeed = (state, { match }) => {
  let id = Object.keys(state.collections).find( idx =>
    state.collections[idx].title.toLowerCase() === match.params.category
  );
  return state.collections[id];
};
