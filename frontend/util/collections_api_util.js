export const fetchCollections = () => (
  $.ajax({
    method: 'GET',
    url: 'api/collections'
  })
);

export const fetchCollection = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/collections/${id}`
  })
);

export const createCollection = (collection) => (
  $.ajax({
    method: 'POST',
    url: 'api/collections',
    data: { collection }
  })
);

export const updateCollection = collection => (
  $.ajax({
    method: 'PATCH',
    url: `api/collections/${collection.id}`,
    data: { collection }
  })
);

export const deleteCollection = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/collections/${id}`
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
