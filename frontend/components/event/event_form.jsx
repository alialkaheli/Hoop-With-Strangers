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
        this.props.action(this.state)
    }

    render(){
       return(
        <form onSubmit={this.handleSubmit}>
            <input placeholder="Date" type="text" value={this.state.date} onChange={this.update("date")}/>
            <br /> 
            <input placeholder="time" type="text" value={this.state.time} onChange={this.update("time")}/>
            <br />
            <select value={this.state.city} onChange={this.update("city")}>
                <option value="San Francisco">San Francisco</option>
                <option value="Miami">Miami</option>
                <option value="New York City">New York City</option>
            </select>
            <br />
            <input placeholder="address" type="text" value={this.state.address} onChange={this.update("address")}/>
            <br />
            <input placeholder="description" type="text" value={this.state.description} onChange={this.update("description")}/>
            <br /> 
            <input type="submit" value={this.props.formType}/>
        </form>
       )
    }
}

export default EventForm;