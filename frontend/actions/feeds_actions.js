import * as APIUtil from '../util/feeds_api_util';

export const RECEIVE_FEEDS = "RECEIVE_FEEDS";

export const receiveFeeds = feeds => ({
  type: RECEIVE_FEEDS,
  feeds
});

export const fetchFeeds = () => dispatch => (
  APIUtil.fetchFeeds()
    .then( feeds => dispatch(receiveFeeds(feeds)))
);
