class ChangeFirsnameToFirstnameInUsers < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :firsname, :firstname
  end
end
