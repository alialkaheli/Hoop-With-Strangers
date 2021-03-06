class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            
            render 'api/users/show'
        else
            render json: ["We've made a mistake"], status: 422
        end 
    end

    private 

    def user_params
        params.require(:user).permit(:password, :email, :city_name, :fname, :image)
    end
end
