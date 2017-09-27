export const fetchCollections = () => (
  $.ajax({
    method: 'GET',
    url: 'api/collections'
  })
);

export const fetchCollection = (collection) => (
  $.ajax({
    method: 'GET',
    url: `api/collections/${collection.id}`
  })
);

export const createCollection = (collection) => (
  $.ajax({
    method: 'POST',
    url: 'api/collections',
    data: { collection }
  })
);

export const addFeedToCollection = ({ collectionId, feedId }) => (
  $.ajax({
    method: "POST",
    url: "api/collection_feeds",
    data: { collection_feed: {
       collection_id: collectionId,
       feed_id: feedId
    }}
  })
);

export const deleteFeedFromCollection = ({ collectionId, feedId }) => (
  $.ajax({
    method: 'DELETE',
    url: "api/collection_feeds/:id",
    data: {collection_feed: {
      collection_id: collectionId,
      feed_id: feedId
    }}
  })
);

export const fetchCollectionFeeds = () => (
  $.ajax({
    method: 'GET',
    url: "api/collection_feeds"
  })
);

export const fetchCollectionFeed = (collection) => (
  $.ajax({
    method: 'GET',
    url: `api/collection_feeds/:id`,
    data: { collection_id: collection.id }
  })
);
