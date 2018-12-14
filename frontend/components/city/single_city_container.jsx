import SingleCity from './all_city';
import {fetchCity} from '../../actions/city_action';
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const msp = state => {
    return({

    })
}

const mdp = dispatch => {
    return({
        fetchCity: (city) => dispatch(fetchCity(city)),
    })
}

export default connect(msp,mdp)(SingleCity);