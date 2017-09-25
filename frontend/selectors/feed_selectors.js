import values from 'lodash/values';

export const allFeeds = state => {
  let feeds = values(state.feeds);
  return feeds;
};

export const feedArticles = state => {
  let articles = values(state.feeds.articles);
  return articles;
};

export const followedFeeds = state => {
  // let collectionFeeds = values(state.collections.map( collection =>
  //   state.collections[collection]['feeds']
  // ));
  // let feeds = values(state.feeds).includes(collectionFeeds);
  // return feeds;
};
