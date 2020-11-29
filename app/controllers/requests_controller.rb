class RequestsController < ApplicationController
    
  
    def index
        @requests = Request.all
        render json: {
        requests: @requests
        }
    end

    def show
        @request =Request.find(params[:id])
      if @request
          render json: {
          request: @request
          }
        else
          render json: {
            status: 500,
            errors: ['request not found']
          }
        end
      end
      
      def create
        @request = Request.new(request_params)
        @request.user_id = session[:user_id]
        if @request.save
          render json: {
          status: :created,
          request: @request
          }
        else 
          render json: {
            status: 500,
            errors: @request.errors.full_messages
          }
        end
      end
  
    private
      # Only allow a list of trusted parameters through.
      def request_params
        params.require(:request).permit(:title, :description, :longitude, :latitude, :request_type)
      end

      def find_request
        @request = Request.find(params[:id])
      end
end
