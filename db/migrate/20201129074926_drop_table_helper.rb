class DropTableHelper < ActiveRecord::Migration[6.0]
  def change
    drop_table :helpers
  end
end
