class Api::CollectionsController < ApplicationController
  before_action :require_logged_in!

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id

    if @collection.save
      render :show
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def index
    @collections = current_user.collections
  end

  def show
    @collection = Collection.find(params[:id])
  end

  def update
    @collection = Collection.find(params[:id])

    if @collection.update_attributes(collection_params)
      render :show
    else
      render json: ["Collection not found"], status: 404
    end
  end

  def destroy
    @collection = Collection.find(params[:id])

    if @collection
      @collection.destroy
      render :show
    else
      render json: ["Collection not found"], status: 404
    end
  end

  private

  def collections_params
    params.require(:collection).permit(:user_id, :title)
  end
end
