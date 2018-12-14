class City < ApplicationRecord
    validates :city, inclusion:{ in: ["San Francisco", "New York City", "Los Angeles"]}
end
