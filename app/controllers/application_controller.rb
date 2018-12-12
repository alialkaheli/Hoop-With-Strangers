class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :is_loggedin?, :current_user
    
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def is_loggedin?
        !!current_user
    end

    def logout
        current_user.reset_token
        session[:session_token] = nil
        
    end 

    def login(user)
        @current_user = user
        session[:session_token] = user.session_token
    end 

    def require_login
        render json: { base: ['invalid'] }, status: 404 if !current_user
    end 

end
