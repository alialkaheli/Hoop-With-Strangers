class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :date, null: false
      t.string :time, null: false
      t.string :address, null: false
      t.text :description 
      t.integer :user_id, null: false 
      t.integer :city_id, null: false 
      t.timestamps
    end
  end
end
