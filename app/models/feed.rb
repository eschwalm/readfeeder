# == Schema Information
#
# Table name: feeds
#
#  id         :integer          not null, primary key
#  title      :string
#  url        :string
#  icon_url   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feed < ApplicationRecord
  validates :url, :title, presence: true

  has_many :collection_feeds
  has_many :collections, through: :collection_feeds
end
