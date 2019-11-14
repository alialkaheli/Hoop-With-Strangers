import { connect } from 'react-redux';
import greeting from './greeting';
import {logout, login} from '../../actions/session_action';

const msp = state =>{
    let currentUser = state.entities.users[state.session.id]
        
    return ({
        currentUser: currentUser 
    })
}

const mdp = dispatch => {
    return({
        logout: () => dispatch(logout()),
        signin: (user) => dispatch(login(user)),
    })
}

export default connect(msp,mdp)(greeting);