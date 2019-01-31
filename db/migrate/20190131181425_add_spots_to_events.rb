class AddSpotsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :spots, :integer
  end
end
