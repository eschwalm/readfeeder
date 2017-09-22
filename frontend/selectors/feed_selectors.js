import values from 'lodash/values';

export const allFeeds = state => {
  let feeds = values(state.feeds);
  return feeds;
};
