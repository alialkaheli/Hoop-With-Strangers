import React from 'react';
import EventIndexItem from './index_event_item';
import {HashLink,Link } from 'react-router-hash-link';

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
          <div className="event-pic">
          <div className="layer">
            <div className="text">
              <h1 className="gg">Good Games</h1>
              <h2 className="event-header-text">They're hard to find</h2>
            </div>
          </div>

          </div>
            <div className="event-description">
              <h1 className="des-title">Hoop With Strangers is a basketball game, with strangers.</h1>
              <p className="des-mes">For two hours, up to ten strangers meet at a court (or some other public court place) with a host to host a basketball game. Not about anything in particular. The circumstances are unusual, but that's the point.</p>
              
            </div>
            <div className="shortcuts-outer">
              <div className="shortcut"> 
                <h1 className="city-header"> JUMP TO YOUR CITY'S GAME TIMES</h1>
                <div className="inner-div" >
                  <HashLink className="hash-links" smooth='true' to="/events#ca">San Francisco</HashLink>
                  <HashLink className="hash-links"  smooth='true' to="/events#ny">New York City</HashLink>
                  <HashLink className="hash-links"  smooth='true' to="/events#fl">Miami</HashLink>
                </div>
              </div>
            </div>
          
        </div>
          <div className="event-main">
            <div className="event-list">
              <div id="ca" className="city-arr">
                
                <div className="city-box"><p >San Francisco</p>👉</div> {sf}
              </div>
            
             
              <div id="ny" className="city-arr">
                <div className="city-box"><p >New York City </p>👉</div> {nyc} 
              </div>
              
              <div  id="fl" className="city-arr">
                <div  className="city-box"><p>Miami</p> 👉</div> {miami}
              </div>


              {/* {events} */}
            </div>
          </div>
          <footer className="home-footer">
            <div className="list">
              <div className="list-position">
                <a className="no-cursor" href="#">
                  About
                        </a>
                {/* <Link to="/events/new">Create Hoop Times</Link> */}
                <a href="https://www.facebook.com/ali.alkaheli96">
                  Facebook
                        </a>
                <a href="https://www.linkedin.com/in/ali-alkaheli-089817124/">
                  LinkedIn
                        </a>
                <br />
                <a className="no-cursor" href="#">
                  Terms of Service
                        </a>
                <a className="no-cursor" href="#">
                  Privacy Policy
                        </a>
              </div>
            </div>
            <div className="aboutus">
              <p>
                Hoop With Strangers is all about making our
                cities feel more like neighborhoods. We're
                more "connected" than ever before, but we're
                also more alone. And all we want to do is
                bring people together because, well, the
                world is better that way.
                      </p>

              <p>
                We're not doing anything groundbreaking.
                We're creating something that would've been
                incredibly unnecessary 20 years ago. But
                while we get busier, it's easy to forget the
                value of having fun. A game that's
                intentionally unintentional.
                      </p>
            </div>
          </footer>
        </div>
      );
    }
  }
  
  export default EventIndex;