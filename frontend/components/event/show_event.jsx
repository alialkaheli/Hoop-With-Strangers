import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {

  componentWillMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render(){
    const event = this.props.event;
    if (!event) {
      return (<div>There none</div>);
    }
    return(
      <div>
        {event.time}
        {event.date}
        {event.city}
        {event.address}
        {event.description}
        <Link to="/events">Event List</Link>
      </div>
    );
  }
}

export default EventShow;
