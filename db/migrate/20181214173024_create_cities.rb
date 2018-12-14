class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :city
      t.timestamps
    end
    add_index :cities, :city
  end
end
