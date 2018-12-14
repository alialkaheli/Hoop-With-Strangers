class City < ApplicationRecord
    validates :city, presence: true

    has_many :events,
    foreign_key: :city_id,
    class_name: :Event

    

end
