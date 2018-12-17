import React from 'react';
import EventIndexItem from './index_event_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {

    componentWillMount(){
      this.props.fetchEvents();
    }
  
    render() {
  
      return (
        <div className="event-main">
          <ul className="event-list">
            {this.props.events.map((event) =>
              <EventIndexItem event={event} deleteEvent={this.props.deleteEvent} key={event.id} />)}
          </ul>
          <Link to="/events/new">Host an Event</Link>
        </div>
      );
    }
  }
  
  export default EventIndex;