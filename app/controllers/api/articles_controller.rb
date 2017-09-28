class Api::ArticlesController < ApplicationController
  def index
    @articles = current_user.articles
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id

    if @article.save
      @articles = current_user.articles
      render 'api/articles/index'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy
    @articles = current_user.articles
    render 'api/articles/index'
  end

  private

  def article_params
    params.require(:article)
      .permit(:source, :author, :description, :publishedAt, :title, :url, :urlToImage)
  end
end
