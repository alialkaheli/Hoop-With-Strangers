class Event < ApplicationRecord
    validates :time, :city, :date, :address,:url, presence: true
    

    belongs_to :host,
        foreign_key: :user_id,
        class_name: :User


    has_many :joins,
    foreign_key: :event_id,
    class_name: :JoinTable

end
