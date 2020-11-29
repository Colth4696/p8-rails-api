if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_p8-frontend-client', domain: 'p8-frontend-client'
  else
    Rails.application.config.session_store :cookie_store, key: '_p8-frontent-client' 
  end