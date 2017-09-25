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
    .then( collection => dispatch(receiveCollection(collection)))
);

export const fetchCollection = collection => dispatch => (
  APIUtil.fetchCollection()
    .then( feeds => dispatch(receiveCollection(feeds)))
);

export const addFeedToCollection = collectionFeed => dispatch => (
  APIUtil.addFeedToCollection(collectionFeed)
    .then( collection => dispatch(receiveCollection(collection)))
);

export const fetchCollectionFeeds = () => dispatch => (
  APIUtil.fetchCollectionFeeds()
    .then( collectionFeeds => dispatch(receiveCollections(collectionFeeds)))
);
