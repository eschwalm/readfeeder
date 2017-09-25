export const fetchCollections = () => (
  $.ajax({
    method: 'GET',
    url: 'api/collections'
  })
);

export const fetchCollection = (collectionId) => (
  $.ajax({
    method: 'GET',
    url: `api/collections/${collectionId}`
  })
);

export const createCollection = (collection) => (
  $.ajax({
    method: 'POST',
    url: 'api/collections',
    data: { collection }
  })
);

export const addFeedToCollection = ({ collectionId, feedId }) =>
  $.ajax({
    method: "POST",
    url: "/api/collection_feeds",
    data: {
      collection_feed: { collection_id: collectionId, feed_id: feedId },
    },
  });
