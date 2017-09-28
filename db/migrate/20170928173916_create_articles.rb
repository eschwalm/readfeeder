class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.integer :user_id
      t.string :source
      t.string :author
      t.text :description
      t.string :publishedAt
      t.string :title
      t.string :url
      t.string :urlToImage

      t.timestamps
    end

    add_index :articles, [:user_id, :url], unique: true
  end
end
