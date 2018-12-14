class Event < ApplicationRecord
    validates :time, :date, :address, presence: true
    

    belongs_to :host,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :city,
        foreign_key: :city_id,
        class_name: :City



end
