class CreateVolunteers < ActiveRecord::Migration[6.0]
  def up
    create_table :volunteers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :request, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table :volunteers
  end
end
