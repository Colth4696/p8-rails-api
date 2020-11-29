class VolunteersController < ApplicationController

def index
        @volunteers = Volunteer.all
        render json: {
        volunteers: @volunteers
        }
    end 


def show
    @volunteer =Volunteer.find(params[:id])
if @volunteer
    render json: {
    volunteer: @volunteer
    }
    else
    render json: {
        status: 500,
        errors: ['volunteer not found']
    }
    end
end

def create
    @volunteer = Volunteer.new
    @volunteer.user_id = session[:user_id]
if @volunteer.save
    render json: {
    status: :created,
    volunteer: @volunteer
    }
    else 
    render json: {
        status: 500,
        errors: @volunteer.errors.full_messages
    }
    end
end
end
