@articles.each do |article|
  json.set! article.id do
    json.extract! article, :id, :source, :author, :description,
    :publishedAt, :title, :url, :urlToImage
  end
end
