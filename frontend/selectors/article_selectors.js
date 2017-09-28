import values from 'lodash/values';

export const savedArticles = (state) => {
  return values(state.saved);
};
