class Feed < ApplicationRecord
  validates :url, :title, presence: true

  has_many :collection_feeds
  has_many :collections, through: :collection_feeds
end
