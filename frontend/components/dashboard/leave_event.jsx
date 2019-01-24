import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserLeave = (props) => {
  const obj = props.event.date.split("-");
  let yr = obj[0]

  let day = obj[2]
  const monthName = { "01": "January", "02": "Febuary", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December" };

  let month = monthName[obj[1].toString()]
  let ampm = false;
  let setTime = props.event.time.split(":")
  if (setTime[0] > 12) {
    setTime[0] -= 12
    ampm = true
  }
  setTime = setTime.join(":")
  if (ampm === true) {
    setTime += "PM"
  } else {
    setTime += "AM"
  }
  return(
    <div>

      <Link to={`/events/${props.event.id}`}>
        <div className="event-attr">
          <p className="event-time">

            {month} {day},
          </p>
          <p className="event-time">{yr}</p>
          <p className="event-time">{setTime}</p>
          <p className="event-address1">Location: </p>
          <p className="event-address">{props.event.address}</p>
        </div>
    </Link>

    <div className="event-select1">
      <div className="edit-btn" onClick={() => props.deleteJoin(props.event.id)}>Leave</div>
    </div>

  </div>
);
}

export default withRouter(UserLeave);
