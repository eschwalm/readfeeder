@articles.each do |article|
  json.set! article.id do
    json.saved article, :source, :author, :description,
    :publishedAt, :title, :url, :urlToImage
  end
end
