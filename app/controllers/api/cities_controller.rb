class Api::CitiesController < ApplicationController
    def index
        @cities = City.all 
        render 'api/cities/index'
    end
end
