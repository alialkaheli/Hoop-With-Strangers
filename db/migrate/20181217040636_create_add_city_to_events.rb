class CreateAddCityToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :city, :string, null: false
  end
end
