import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = (props) => (
  <li>
    <Link to={`/events/${props.event.id}`}>
      <div className="event-attr">
        <p className="event-spec">{props.event.time}</p>
        <p className="event-spec">{props.event.date}</p>
        <p className="event-spec">{props.event.city}</p>
        <p className="event-spec">{props.event.address}</p>
        <p className="event-spec">{props.event.description}</p>

      </div>
    </Link>
    <Link to={`/events/${props.event.id}/edit`}>Edit</Link>
    <button onClick={() => props.deleteEvent(props.event)}>Delete</button>
  </li>
);

export default withRouter(EventIndexItem);
