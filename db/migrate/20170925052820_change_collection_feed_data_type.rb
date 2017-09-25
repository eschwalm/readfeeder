class ChangeCollectionFeedDataType < ActiveRecord::Migration[5.1]
  def up
    change_column :collection_feeds, :feed_id, :string
  end

  def down
    change_column :collection_feeds, :feed_id, :integer
  end
end
