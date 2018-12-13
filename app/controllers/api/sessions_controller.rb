class Api::SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]
    
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password] )
        if @user.nil? 
            render json: ['Invalid credentials'] , status: 422
        else
            login(@user)
            render 'api/users/show'
        end 
    end

    def destroy
        @user = current_user
        logout
        render json: {}
    end
end
