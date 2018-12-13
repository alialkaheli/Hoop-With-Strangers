class User < ApplicationRecord
    validates :fname, :password_digest, :city_name, presence: true
    validates :session_token, :email, uniqueness: true, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}


    attr_reader :password
    after_initialize :ensure_token 

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_token
        self.session_token = SecureRandom.urlsafe_base64 
        self.save 
        self.session_token
    end

    def self.find_by_credentials(user, pass)
        usr = User.find_by(email: user)
        usr && usr.isPass?(pass) ? usr : nil 
    end 

    def isPass?(pass)
        BCrypt::Password.new(self.password_digest).is_password?(pass)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
end
