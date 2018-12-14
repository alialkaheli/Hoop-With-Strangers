import SessionForm from './session_form';
import {login, clearErrors} from '../../actions/session_action';
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = (state) => {
    
    return({
        formType: "Sign In",
        errors: state.errors.session,
        navLink: <Link to="/signup">If you haven't created an account, click here to sign up</Link>
    })
}

const mdp = dispatch => {
    return({
        form: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(msp, mdp)(SessionForm)