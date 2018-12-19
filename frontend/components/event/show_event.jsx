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
      <div className="show-main">
        <div className="show-content"> 
          <div className="event-box">
            <h1 className="toPlay">JOIN TO PLAY</h1>
            <p className="date">⏰{event.time}<br/></p>
            <p className="date">📅{event.date}<br /> </p>
            <p className="info">🗺{event.city}<br /> </p>
            <p className="info">📍{event.address}</p>
            <p className="info">🗣{event.url}</p>
            
          </div>
          <div className="show-des">
            <h1 className="meet-host"> Meet Your Host </h1>
            <p className="story">Description</p>
            <p className="host-description">{event.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
