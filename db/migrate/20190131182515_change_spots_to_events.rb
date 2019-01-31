class ChangeSpotsToEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :spots
    add_column :events, :spots, :integer, default: 1
  end
end
