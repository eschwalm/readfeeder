Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :collections, only: [:create, :index, :show, :update, :destroy]
    resources :feeds, only: [:show, :create, :destroy]
    resources :collection_feeds, only: [:create, :destroy]
  end

  root "static_pages#root"
end
