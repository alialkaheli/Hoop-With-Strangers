import { connect } from 'react-redux';
import { deleteJoin} from '../../actions/join_actions';
import { deleteEvent, updateEvent } from "../../actions/event_action";

import Dashboard from './main_dash';

// Object.values(state.entities.events).filter(
//     event => event.user_id !== state.session.id 
//   ),
const msp = state => ({
    joinedEvents: Object.values(state.entities.join)
        .filter(join => join.user_id === state.session.id)
        .map(join => state.entities.events[join.event_id]),
    hostedEvents: Object.values(state.entities.events).filter(
    event => event.user_id === state.session.id
    ),
})

const mdp = dispatch => {
    return ({
        deleteJoin: (id) => dispatch(deleteJoin(id)),
        deleteEvent: (id) => dispatch(deleteEvent(id)),
        updateEvent: event => dispatch(updateEvent(event))
    })
}

export default connect(msp,mdp)(Dashboard);