class Article < ApplicationRecord
  validates :source, :url, presence: true
  validates :url, uniqueness: { scope: :user_id }

  belongs_to :user
end
