import SessionForm from './session_form';
import {signup} from '../../actions/session_action';
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state) => {
    
    return({
        formType: "Sign Up",
        errors: state.errors.session,
        navLink: <Link to="/login">login</Link>
    })
}

const mdp = dispatch => {
    return({
        form: user => dispatch(signup(user))
    })
}

export default connect(msp, mdp)(SessionForm)