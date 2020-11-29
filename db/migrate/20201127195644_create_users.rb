class CreateUsers < ActiveRecord::Migration[6.0]
  def up
    create_table :users do |t|
      t.string :firsname
      t.string :lastname
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
