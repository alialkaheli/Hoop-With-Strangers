import React from 'react';

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
        if(this.props.formType==='Create Event'){
            this.props.action(this.state).then(action => {
            this.props.history.push(`/events/${action.event.id}`);
          });
        } else{
            this.props.action(this.state)
        }
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
            <input className="input-box" placeholder="Url" type="text" value={this.state.url} onChange={this.update("url")}/>
            <br />
            <input className="submit-con" type="submit" value={this.props.formType}/>
        </form>
        </div>
       )
    }
}

export default EventForm;