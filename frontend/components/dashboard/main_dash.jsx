import React from 'react';
import { Link } from 'react-router-dom';
import HostDelete from './host_delete';
import UserLeave from './leave_event';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hostedEvents: this.props.hostedEvents,
            joinedEvents: this.props.joinedEvents
        }
    }
    render(){
        if (!this.props.joinedEvents && !this.props.hostedEvents) {
            return <div> NO EVENTS!</div>;
        }else{
            
            return <div className="dash-page">
                <div className="dash-content">
                  <div className="dash-side">
                    <h1 className="welcome">Welcome home!</h1>
                    <p className="message">
                      What are you grateful for today?
                    </p>
                    <div className="join-link">
                      <Link to={"/events"}>
                        <p>Sign up to join a match!</p>
                      </Link>
                    </div>
                  </div>

                  <div className="user-events">
                    <label>
                      <h1>Hoop times you're attending</h1>
                    </label>
                    <div className="hosted-events">
                      {this.props.joinedEvents.map(event => {
                        return <UserLeave key={event.id} event={event} deleteJoin={this.props.deleteJoin} updateEvent={this.props.updateEvent} />;
                      })}
                    </div>

                    <label>
                      {" "}
                      <h1>Events You HOSTED...</h1>
                    </label>
                    <div className="hosted-events">
                      {this.props.hostedEvents.map(event => {
                        return <HostDelete key={event.id} event={event} deleteEvent={this.props.deleteEvent} />;
                      })}
                    </div>
                  </div>
                  
                </div>
                <footer className="home-footer">
                <div className="list">
                  <div className="list-position">
                    <a className="no-cursor" href="#">
                      About
                        </a>
                    <Link to="/events">Hoop Times</Link>
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
              </div>;
        }
    }
}

export default Dashboard;