import { connect } from 'react-redux';
import greeting from './greeting';
import {logout} from '../../actions/session_action';

const msp = state =>{
    let currentUser = state.entities.users[state.session.id]
        
    return ({
        currentUser: currentUser 
    })
}

const mdp = dispatch => {
    return({
        logout: () => dispatch(logout()),
    })
}

export default connect(msp,mdp)(greeting);