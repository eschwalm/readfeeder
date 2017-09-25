@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :title
    json.feeds collection.collection_feeds
  end
end
