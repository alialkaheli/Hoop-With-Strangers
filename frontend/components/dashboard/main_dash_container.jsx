import { connect } from 'react-redux';
import { deleteJoin} from '../../actions/join_actions';
import { deleteEvent} from '../../actions/event_action';

import Dashboard from './main_dash';

const msp = state => ({
    joinedEvents: Object.values(state.entities.events).filter(
        event => event.host_id !== state.session.id
      ),
    hostedEvents: Object.values(state.entities.events).filter(
    event => event.user_id === state.session.id
    ),
})

const mdp = dispatch => {
    return ({
        deleteJoin: (id) => dispatch(deleteJoin(id)),
        deleteEvent: (id) => dispatch(deleteEvent(id))
    })
}

export default connect(msp,mdp)(Dashboard);