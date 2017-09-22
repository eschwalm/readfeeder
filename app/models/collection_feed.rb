class CollectionFeed < ApplicationRecord
  validates :collection_id, :feed_id, presence: true
  validates :feed_id, uniqueness: { scope: :collection_id }

  belongs_to :feed
  belongs_to :collection
end
