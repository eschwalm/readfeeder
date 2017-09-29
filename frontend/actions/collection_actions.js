import * as APIUtil from '../util/collections_api_util';

export const RECEIVE_ALL_COLLECTIONS = "RECEIVE_ALL_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";

export const receiveCollections = collections => ({
  type: RECEIVE_ALL_COLLECTIONS,
  collections
});

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection
});

export const fetchCollections = () => dispatch => (
  APIUtil.fetchCollections()
    .then( collections => dispatch(receiveCollections(collections)))
);

export const createCollection = collection => dispatch => (
  APIUtil.createCollection(collection)
    .then( newCollection => dispatch(receiveCollection(newCollection)))
);

export const fetchCollection = collection => dispatch => (
  APIUtil.fetchCollection(collection)
    .then( feeds => dispatch(receiveCollection(feeds)))
);

export const updateCollection = collection => dispatch => (
  APIUtil.updateCollection(collection)
    .then( updated => dispatch(receiveCollection(updated)))
);

export const addFeedToCollection = collectionFeed => dispatch => (
  APIUtil.addFeedToCollection(collectionFeed)
    .then( collection => dispatch(receiveCollection(collection)))
);

export const fetchCollectionFeeds = () => dispatch => (
  APIUtil.fetchCollectionFeeds()
    .then( collectionFeeds => dispatch(receiveCollections(collectionFeeds)))
);

export const deleteFeedFromCollection = collectionFeed => dispatch => (
  APIUtil.deleteFeedFromCollection(collectionFeed)
    .then( collection => dispatch(receiveCollection(collection)))
);

export const fetchCollectionFeed = collection => dispatch => (
  APIUtil.fetchCollectionFeed(collection)
    .then( collectionFeed => dispatch(receiveCollection(collectionFeed)))
);
