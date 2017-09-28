json.extract! @collection, :id, :title
json.feeds @collection.collection_feeds.feed_id
