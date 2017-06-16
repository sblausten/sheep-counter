require 'sinatra'

class SheepCounterApp < Sinatra::Base
	set :erb, :format => :html5

	get '/' do
		erb :index
	end
end
