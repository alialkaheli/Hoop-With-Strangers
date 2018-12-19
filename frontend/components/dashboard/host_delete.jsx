import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HostDelete = (props) => (
  <div>
    <Link to={`/events/${props.event.id}`}>
      <div className="event-attr">
        <p className="event-date">{props.event.date}</p>
        <p className="event-time">{props.event.time}</p>
        <p className="event-address">{props.event.address}</p>
        <p className="event-url">{props.event.url}</p>
        
        
      </div>

    </Link>
    
    <div className="edit-btn"><Link  to={`/events/${props.event.id}/edit`}>Edit</Link></div>
    <button className="delete-btn" onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
    
    </div>
);

export default withRouter(HostDelete);
