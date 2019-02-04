import React from 'react';
import {withRouter, Link} from 'react-router-dom';
// import { Link } from "react-router-dom";

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
          [field]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        
            this.props.action(this.state).then(action => {
            this.props.history.push(`/events/${action.event.id}`);
          });
       
    }

    render(){
        
       return(
           <div className="host-main">
        <form className="host-form" onSubmit={this.handleSubmit} >
            <h1 className="signin">{this.props.formType}</h1>
            <input className="input-box" placeholder="Date" type="date" value={this.state.date} onChange={this.update("date")}/>
            <br /> 
            <input className="input-box" placeholder="time" type="time" value={this.state.time} onChange={this.update("time")}/>
            <br />
            <select className="drop-down-city" value={this.state.city} onChange={this.update("city")}>
                <option value='' disabled selected >SELECT CITY</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Miami">Miami</option>
                <option value="New York City">New York City</option>
            </select>
            <br />
            <input className="input-box" placeholder="address" type="text" value={this.state.address} onChange={this.update("address")}/>
            <br />
            <textarea className="textarea-box" placeholder="description" type="text" value={this.state.description} onChange={this.update("description")}/>
            <br />
            <input className="submit-con" type="submit" value={this.props.formType}/>
        </form>
               <footer className="home-footer">
                   <div className="list">
                       <div className="list-position">
                           <a className="no-cursor" href="#">
                               About
                        </a>
                           {/* <Link to="/events">Hoop Times</Link> */}
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
       )
    }
}

export default withRouter(EventForm);