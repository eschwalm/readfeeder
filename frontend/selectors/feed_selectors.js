import values from 'lodash/values';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
import collectionFeed from './collection_selectors';
import flatten from 'lodash/flatten';
import find from 'lodash/find';
import merge from 'lodash/merge';

export const allFeeds = state => {
  let feeds = values(state.feeds);
  return feeds;
};

export const feedArticles = state => {
  let articles = values(state.feeds.articles);
  return articles;
};

export const currentFeed = (state, match) => {
  let current = find(
    state.feeds, (feed) => feed.id === match.params.source);
  return current;
};

export const followedFeeds = (state, match) => {
  let collectionFeeds = flatten(
    values(state.collections).map( col => col.feeds));
  let feeds = values(collectionFeeds).map( feed => feed.feed_id);
  let currentFeeds = {};

  values(state.feeds).map( feed => {
    if (includes(feeds, feed.id)) {
      currentFeeds[feed.id] = feed;
    }
  });

  return currentFeeds;
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

export const allCollectionFeeds = (state) => {
  let collections = values(state.collections);
  let feeds = [];

  collections.forEach( collection => feeds.push(collection.feeds));

  feeds = flatten(feeds);

  if (feeds) {
    let currentFeeds = {};

    feeds.forEach( feed => {
      if (state.feeds[feed.feed_id]) {
        currentFeeds[feed.feed_id] = state.feeds[feed.feed_id];
      }
    });

    return currentFeeds;
  }
  return state.feeds;
};
