class Api::JoinTablesController < ApplicationController
    def create
        @join = JoinTable.new(join_table_params)
        if @join.save
          render :show
        else
          render json: @join.errors.full_messages, status: 422
        end
      end
    
      def destroy
        @join = current_user.joins.find_by(event_id: params[:id])
        @join.destroy
        render :show
      end
    
      def join_table_params
        params.require(:join).permit(:user_id, :event_id)
      end
    
end
