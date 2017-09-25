class Api::CollectionFeedsController < ApplicationController

  def index
    @feeds = current_user.feeds.includes(:collections)
    render 'api/feeds/index'
  end

  def create
    @collection_feed = CollectionFeed.new(collection_feed_params)
    if @collection_feed.save
      @collection = @collection_feed.collection
      render 'api/collections/show'
    else
      render json: @collection_feed.errors.full_messages, status: 422
    end
  end

  def destroy
   @collection_feed = CollectionFeed.find_by(
     collection_id: collection_feed_params[:collection_id],
     feed_id: collection_feed_params[:feed_id]
   )

   if @collection_feed
     if @collection_feed.destroy
       @collection = Collection.find(@collection_feed.collection_id)
       render 'api/collections/show'
     else
       render json: @collection_feed.errors.full_messages, status: 422
     end
   else
     render json: ['collection feed not found'], status: 404
   end
 end

  private

  def collection_feed_params
    params.require(:collection_feed).permit(:collection_id, :feed_id)
  end
end
