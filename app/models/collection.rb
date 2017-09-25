# == Schema Information
#
# Table name: collections
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user
  has_many :collection_feeds
  # has_many :feeds, through: :collection_feeds
end
