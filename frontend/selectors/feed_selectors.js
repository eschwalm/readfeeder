import values from 'lodash/values';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
import collectionFeed from './collection_selectors';

export const allFeeds = state => {
  let feeds = values(state.feeds);
  return feeds;
};

export const feedArticles = state => {
  let articles = values(state.feeds.articles);
  return articles;
};


export const collectionFeeds = (state, match) => {
  let id = Object.keys(state.collections).find( idx =>
    state.collections[idx].title.toLowerCase() === match.params.category
  );
  let collection = state.collections[id];
  if (collection) {
    let feeds = values(collection.feeds).map( feed => feed.feed_id);
    let currentFeeds = {};

    feeds.forEach( feed => {
      if (state.feeds[feed]) {
        currentFeeds[feed] = state.feeds[feed];
      }
    });

    return currentFeeds;
  }
  return state.feeds;
};
