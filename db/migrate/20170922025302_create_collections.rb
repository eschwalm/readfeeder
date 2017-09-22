class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.integer :user_id
      t.string :title

      t.timestamps
    end

    add_index :collections, [:user_id, :title], unique: true
  end
end
