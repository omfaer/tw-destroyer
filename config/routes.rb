Rails.application.routes.draw do
  root 'home#index'

  post 'destroy', to: 'home#destroy'
end
