class Api::CollectionFeedsController < ApplicationController
  #TODO come back to this after feeds!

  def index
    @collection_feed = Collection
  end

  def create

  end

  def destroy
  end

  private

  def collection_feed_params
    params.require(:collection_feed).permit(:collection_id, :feed_id)
  end
end
