import React from 'react';
import { Link } from 'react-router-dom';
import HostDelete from './host_delete';

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
            return(
                
                <div className="dash-content">
                    <div className="dash-side">
                        <h1 className="welcome">Welcome home!</h1>
                        <p className="message">What are you grateful for today?</p>
                        <div className="join-link"><Link to={'/events'}>Sign up to join a match!</Link></div>
                    </div>
                    <div className="user-events">
                        {/* <div> JOINED
                            {this.props.joinedEvents.map(event => {
                            return (<EventIndexItem key={event.id} event={event} deleteEvent={this.props.deleteJoin}/>)})}
                        </div> */}
                        <div> HOSTED
                        {this.props.hostedEvents.map(event => {
                            return (<HostDelete key={event.id} event={event} deleteEvent={this.props.deleteEvent}/>)})}    
                        </div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default Dashboard;