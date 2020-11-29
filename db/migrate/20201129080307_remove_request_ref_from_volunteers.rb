class RemoveRequestRefFromVolunteers < ActiveRecord::Migration[6.0]
  def change
    remove_reference(:volunteers, :request, index: true, foreign_key: true)

  end
end
