# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all
JoinTable.destroy_all

###images
img1 = "https://www.wentzville.k12.mo.us/cms/lib/MO02202303/Centricity/Domain/107/mean-basketball_right.png"
img2 = "https://www.fg-a.com/sports/basketball-fire-black-2018.jpg"
img3 = "https://www.freevector.com/uploads/vector/preview/3290/FreeVector-Mickey-Mouse-And-Donald-Duck.jpg"
img4 = "http://hatobuilico.com/wp-content/uploads/2018/06/basketball-ball-clip-art-basketball-hoop-pictures-free-clipart.jpg"


##host users
guest = User.create(fname: 'Guest', password: 'Guest123', email: 'Guest@guest.com', city_name: 'San Francisco', image: img4)
user1 = User.create(fname: 'Pablo', password: "password", email:'pablo@email.com', city_name: 'San Francisco', image: img1)
user2 = User.create(fname: 'Mike', password: "password", email:'mike@email.com', city_name: 'New York City', image: img2)
user3 = User.create(fname: 'Rick', password: "password", email:'rickandmorty@email.com', city_name: 'Miami', image: img3)
###users join
user4 = User.create(fname: 'Savio', password: "password", email:'savio@email.com', city_name: 'San Francisco', image: img2)
user5 = User.create(fname: 'Jon', password: "password", email:'jon@email.com', city_name: 'New York City', image: img1)
user6 = User.create(fname: 'Safuh', password: "password", email:'safuh@email.com', city_name: 'Miami', image: img1)
user7 = User.create(fname: 'Ali', password: "password", email:'ali@email.com', city_name: 'New York City', image: img3)

###events created
event1 = Event.create(date: '2019-02-20', time: '15:30', city: 'San Francisco', address: "401 Berry St", description: "Outdoor basketball court but tought to find parking.", user_id: guest.id, spots: '8')

event2 = Event.create(date: '2019-02-15', time: '18:00', city: 'San Francisco', address: "749 9th St", description: "Indoor, YMCA gym, but do not need a membership.", user_id: user4.id, spots: '0')

event3 = Event.create(date: '2019-02-24', time: '16:00', city: 'New York City', address: "299 South St Pier 36", description: "Indoor, No membership required, nice clean place.", user_id: user5.id, spots:'6')

event4 = Event.create(date: '2019-02-21', time: '13:00', city: 'New York City', address: "150 Furman St", description: "Outdoor with roofing.", user_id: user2.id, spots:'5')

event5 = Event.create(date: '2019-03-01', time: '14:00', city: 'Miami', address: "799 NE 54th St", description: "Outdoor vasketball with beach view.", user_id: user3.id, spots:'1')

###events join

join1 = JoinTable.create(user_id: user4.id, event_id: event1.id)
join2 = JoinTable.create(user_id: guest.id, event_id: event2.id)
join3 = JoinTable.create(user_id: user7.id, event_id: event4.id)
join4 = JoinTable.create(user_id: user5.id, event_id: event4.id)
join5 = JoinTable.create(user_id: user7.id, event_id: event4.id)
join6 = JoinTable.create(user_id: user6.id, event_id: event5.id)
join7 = JoinTable.create(user_id: user2.id, event_id: event3.id)