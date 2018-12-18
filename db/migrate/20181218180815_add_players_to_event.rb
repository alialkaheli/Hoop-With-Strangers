class AddPlayersToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :players, :integer
  end
end
