import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = (props) => {
  const obj = props.event.date.split("-");
  let yr = obj[0]
  
  let day = obj[2]
  const monthName = { "01": "January", "02": "Febuary", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December" };
  
  let month = monthName[obj[1]].toString();
  let ampm = false;
  let setTime = props.event.time.split(":")
  if(setTime[0] > 12){
    setTime[0] -= 12
    ampm = true
  }
  setTime = setTime.join(":")
  if(ampm === true){
    setTime += "PM"
  }else{
    setTime += "AM"
  }
return (
  <li>
    <Link to={`/events/${props.event.id}`}>
      <div className="event-attr">
        <p className="event-time">
          {month} {day},
        </p>
        <p className="event-time">{yr}</p>
        <p className="event-time">{setTime}</p>
        <p className="event-address1">Location: </p>
        <p className="event-address">{props.event.address}</p>
        {/* <p className="event-url">{props.event.url}</p> */}
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
