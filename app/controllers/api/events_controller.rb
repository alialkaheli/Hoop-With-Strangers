class Api::EventsController < ApplicationController
    def index
        @events = Event.all
      end
    
      def show
        
        @event = Event.find_by(id: params[:id])
        render :show
      end
    
      def create
        @event = Event.new(event_params)
        @event.user_id = current_user.id
        if @event.save
          render :show
        else
          render json: @event.errors.full_messages, status: 422
        end
      end
    
      def update
        # debugger
        # @event = current_user.hostee.find(params[:id])
        @event = Event.find(params[:id])
        if @event.update(event_params)
          render :show
        else
          render json: ["not the host"], status: 422
        end
      end
    
      def destroy
        @event = current_user.hostee.find(params[:id])
        if @event.destroy
          render :show
        else 
          render json: @event.errors.full_messages, status: 422
        end
      end
    
      private
    
      def event_params
        params.require(:event).permit(:time, :city, :date, :spots, :address, :description, :url )
      end
end
