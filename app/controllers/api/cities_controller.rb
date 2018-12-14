class Api::CitiesController < ApplicationController
    def index
        @cities = City.all 
        render 'api/cities/index'
    end

    def show    
        @city = City.find(params[:id])
        if @city 
            render 'api/cities/show'
        else 
            render json: ['Invalid City'] , status: 422
        end 
    end 
end
