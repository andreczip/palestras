
require 'sinatra'
require 'json'
require 'active_record'

# O JSON não deve conter um elemento ROOT, apenas os atributos
ActiveRecord::Base.include_root_in_json = false

class List < ActiveRecord::Base
end

List.establish_connection(
    :adapter => "sqlite3",
    :database => "data.db"
)

# Apresenta a página contendo o código HTML e Javascript
get '/' do
  File.read(File.join('public', 'index.html'))
end

# Endpoint GET para obter a última postagem do banco de dados
get '/lists' do
    content_type :json
    List.all().to_json
end

# Endpoint POST para criar uma nova postagem
post '/lists' do
    data = JSON.parse request.body.read

    list = List.new
    list.text = data['text']
    list.done = false

    list.save
end