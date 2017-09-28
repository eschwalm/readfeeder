class Article < ApplicationRecord
  validates :source, :url, presence: true
  validates :user_id, uniqueness: { scope: :url }

  belongs_to :user
end
