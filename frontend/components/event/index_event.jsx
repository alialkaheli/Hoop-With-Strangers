import React from 'react';
import EventIndexItem from './index_event_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {

    componentWillMount(){
      this.props.fetchEvents();
    }
  
    render() {
      let sf = this.props.events.map((event) =>{
        if(event.city === 'San Francisco'){
           return <EventIndexItem event={event} deleteEvent={this.props.deleteEvent} key={event.id} />}})

      let nyc = this.props.events.map((event) =>{
        if(event.city === 'New York City'){
           return <EventIndexItem event={event} deleteEvent={this.props.deleteEvent} key={event.id} />}})

      let miami = this.props.events.map((event) =>{
        if(event.city === 'Miami'){
           return <EventIndexItem event={event} deleteEvent={this.props.deleteEvent} key={event.id} />}})
     let events = this.props.events.map((event) =>{
      <EventIndexItem event={event} deleteEvent={this.props.deleteEvent} key={event.id} />})
      
      return (
        <div className="event-content">
        <div className="event-heading">
          <div className="event-pic"></div>
          <div className="event-description">
            <h1 className="des-title">Hoop With Strangers is a basketball game, with strangers.</h1>
            <p className="des-mes">For two hours, up to ten strangers meet at a court (or some other public court place) with a host to host a basketball game. Not about anything in particular. The circumstances are unusual, but that's the point.</p>
          </div>
        </div>
          <div className="event-main">
            <ul className="event-list">
              <div className="city-arr">
                <div className="city-box"><p>San Francisco</p>👉</div> {sf}
              </div>
            
             
              <div className="city-arr">
                <div className="city-box"><p>New York City </p>👉</div> {nyc} 
              </div>
              
              <div className="city-arr">
                <div className="city-box"><p>Miami</p> 👉</div> {miami}
              </div>


              {/* {events} */}
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default EventIndex;