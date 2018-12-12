class Api::SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]
    
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password] )
        if @user.nil? 
            render json: { base: ['invalid credentials'] }, status: 401
        else
            login(@user)
            render `api/users/show`
        end 
    end

    def destroy
        logout
        render 'api/users/show'
    end
end
