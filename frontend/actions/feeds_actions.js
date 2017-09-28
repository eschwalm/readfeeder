import * as APIUtil from '../util/feeds_api_util';

export const RECEIVE_FEEDS = "RECEIVE_FEEDS";
export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_COLLECTION_FEED = "RECEIVE_COLLECTION_FEED";

export const receiveFeeds = feeds => ({
  type: RECEIVE_FEEDS,
  feeds
});

export const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

export const receiveCollectionFeed = feed => ({
  type: RECEIVE_COLLECTION_FEED,
  feed
});

export const fetchFeeds = () => dispatch => (
  APIUtil.fetchFeeds()
    .then( feeds => dispatch(receiveFeeds(feeds)))
);

export const fetchFeed = source => dispatch => (
  APIUtil.fetchFeed(source)
    .then( feed => dispatch(receiveFeed(feed)))
);

export const fetchCollectionFeed = source => dispatch => (
  APIUtil.fetchFeed(source)
    .then( feed => dispatch(receiveCollectionFeed(feed)))
);

export const addFeed = feed => dispatch => (
  APIUtil.addFeed(feed)
    .then( feed => dispatch(receiveFeed(feed)))
);
