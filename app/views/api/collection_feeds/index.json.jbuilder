@CollectionFeeds.each do |collection|
  json.set! collection.collection_id do
    json.feedId collection.feed_id
  end
end
