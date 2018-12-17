import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = ({event, deleteEvent}) => (
  <li>
    <Link to={`/events/${event.id}`}><div>
        {event.time}
        {event.date}
        {event.city}
        {event.address}
        {event.description}
        </div></Link>
    <Link to={`/events/${event.id}/edit`}>Edit</Link>
    <button onClick={() => deleteEvent(event.id)}>Delete</button>
  </li>
);

export default withRouter(EventIndexItem);
