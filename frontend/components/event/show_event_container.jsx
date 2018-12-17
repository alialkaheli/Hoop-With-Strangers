import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_action';
import EventShow from './show_event';

const msp = (state, own) => {
    let id = own.match.params.eventId;
    let event = state.entities.events[id];
    return({
        event: event
    })
}

const mdp = dispatch => {
    return ({
        fetchEvent: (id) => dispatch(fetchEvent(id)),
    })
}

export default connect(msp, mdp)(EventShow);