class ChangeSpotsCount < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :spots
    add_column :events, :spots, :integer, default: 9
  end
end
