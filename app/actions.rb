# Homepage (Root path)
require 'instagram'

enable :sessions

CALLBACK_URL = "http://localhost:3000/callback"

Instagram.configure do |config|
  config.client_id = "bf59ffb05c2d400185290254b7049ef7"
  config.client_secret = "6f519e88b3ea4292b24300adad9063b8"
  # For secured endpoints only
  #config.client_ips = '<Comma separated list of IPs>'
end

get "/" do
  erb :homepage
end

get "/oauth/connect" do
  redirect Instagram.authorize_url(:redirect_uri => CALLBACK_URL)
end

get "/callback" do
  response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
  session[:access_token] = response.access_token
  erb :index
end
