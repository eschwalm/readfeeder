class Api::FeedsController < ApplicationController
  def create
    @feed = Feed.new(feed_params)

    if @feed.save
      render json: @feed
    else
      render @feed.errors.full_messages, status: 422
    end
  end

  def show
    @feed = Feed.find(params[:id])
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url, :icon_url)
  end
end
