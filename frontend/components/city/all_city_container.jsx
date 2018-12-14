import AllCity from './all_city';
import {fetchCities} from '../../actions/city_action';
import { connect } from 'react-redux';

const msp = state => {
    return({
        cities: Object.values(state.cities)
    })
}

const mdp = dispatch => {
    return({
        fetchCities: () => dispatch(fetchCities())
    })
}

export default connect(msp,mdp)(AllCity);