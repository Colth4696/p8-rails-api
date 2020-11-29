class CreateHelpers < ActiveRecord::Migration[6.0]
  def change
    create_table :helpers do |t|

      t.timestamps
    end
  end
end
