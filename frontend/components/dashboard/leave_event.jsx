import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserLeave = (props) => (
  <div>
    <Link to={`/events/${props.event.id}`}>
      <div className="event-attr">
        <p className="event-date">{props.event.date}</p>
        <p className="event-time">{props.event.time}</p>
        <p className="event-address">{props.event.address}</p>
        <p className="event-url">{props.event.url}</p>
        
        
      </div>

    </Link>
    
    <button className="delete-btn" onClick={() => props.deleteJoin(props.event.id)}>Leave</button>
    
    </div>
);

export default withRouter(UserLeave);
