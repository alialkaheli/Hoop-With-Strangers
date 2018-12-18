json.join do
    json.extract! @join, :id, :user_id, :event_id
  end
  
  json.event do
    json.extract! @join.event, :id, :user_id, :date, :time, :address, :city, :description, :url 
    json.host do
      json.extract! @join.event.host, :id, :fname, :email
    end
  end