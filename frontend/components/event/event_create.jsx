import { connect } from 'react-redux';
import { fetchEvent, createEvent } from '../../actions/event_action';
import EventForm from './event_form';

const msp = () => {
    let event = {date: "", time: "", address: "", city: "", description: "", url: "" };
    let formType = "Create Event";
    
    return({
        event: event,
        formType: formType,
    })
}

const mdp = (dispatch)=> {
    return ({
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        action: event => dispatch(createEvent(event))
    })
}

export default connect(msp, mdp)(EventForm);