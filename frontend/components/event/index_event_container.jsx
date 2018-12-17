import { connect } from 'react-redux';
import { fetchEvents, deleteEvent } from '../../actions/event_action';
import EventIndex from './index_event';

const msp = state => {
    let events = Object.values(state.entities.events)
    return({
        events: events
    }) 
}

const mdp = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents()),
        deleteEvent: id => dispatch(deleteEvent(id))
    })
}

export default connect(msp, mdp)(EventIndex);