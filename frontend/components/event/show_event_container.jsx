import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_action';
import EventShow from './show_event';
import { createJoin, deleteJoin} from '../../actions/join_actions';
import { updateEvent} from '../../actions/event_action';

const msp = (state, own) => {
    let eid = own.match.params.eventId;
    let event = state.entities.events[eid];
    // debugger;
    return({
        // host: event.user_id,
        event: event,
        currentUserId: state.session.id,
        users: state.entities.users,
        join: state.entities.join,
        currentUserJoin: Object.values(state.entities.join).filter(join => join.user_id == state.session.id && join.event_id == eid)[0]
    })
}

const mdp = dispatch => {
    return ({
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        createJoin: join => dispatch(createJoin(join)),
        deleteJoin: id => dispatch(deleteJoin(id)),
        updateEvent: event => dispatch(updateEvent(event))
        
    })
}

export default connect(msp, mdp)(EventShow);