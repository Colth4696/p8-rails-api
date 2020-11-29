class CreateRequests < ActiveRecord::Migration[6.0]
  def up
    create_table :requests do |t|
      t.string :title
      t.string :description
      t.decimal :latitude
      t.decimal :longitude
      t.string :request_type
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table :requests
  end
end


