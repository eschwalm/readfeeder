import values from 'lodash/values';

export const allFeeds = state => {
  let feeds = values(state.feeds);
  return feeds;
};

export const feedArticles = state => {
  let articles = values(state.feeds.articles);
  return articles;
};

export const followedFeeds = ({ entities: { collections }}) => {
};
