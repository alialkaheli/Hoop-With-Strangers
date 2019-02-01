import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = (props) => {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let date = new Date(props.event.date).getUTCDay();
  let weekday = weekdays[date];
  const obj = props.event.date.split("-");
  let yr = obj[0]
  
  let day = obj[2]
  const monthName = { "01": "JAN", "02": "FEB", "03": "MAR", "04": "APR", "05": "MAY", "06": "JUN", "07": "JUL", "08": "AUG", "09": "SEP", "10": "OCT", "11": "NOV", "12": "DEC" };
  
  let month = monthName[obj[1]].toString();
  let ampm = false;
  let setTime = props.event.time.split(":")

  if(setTime[0] > 12){
    setTime[0] -= 12
    ampm = true
  }
  
  
  setTime = setTime.join(":")
  if(ampm === true ){
    setTime += "PM"
  }else{
    setTime += "AM"
  }
  let spot;
  if(props.event.spots < 1){
    spot = "No spots left"
  }else{
    spot = props.event.spots + " SEATS LEFT!";
  }
  
return (
  <li>
    <Link to={`/events/${props.event.id}`}>
      <div className="event-attr">
        <div className="card-top">
          <div className="left-card">
            <p className="event-address1">{weekday}</p>
            <p className="event-time">
              {month} {day}
            </p>
            <p className="time">{setTime}</p>
          </div>
          <div className="card-right">
            <div className="profile-pic-events" />
          </div>
        </div>
        <p className="event-address">{props.event.address}</p>
        
        <div className="line-split" />
        <h5>{spot}</h5>
      </div>
    </Link>
    <Link to={`/events/${props.event.id}`}>
      <div hover="Check it out ->" className="event-select">
        This one ->
      </div>
    </Link>
    {/* <Link to={`/events/${props.event.id}/edit`}>Edit</Link>
    <button onClick={() => props.deleteEvent(props.event.id)}>Delete</button> */}
  </li>
);
  }

export default withRouter(EventIndexItem);
