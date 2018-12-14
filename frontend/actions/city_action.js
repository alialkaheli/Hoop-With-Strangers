import * as cityUtil from '../util/city_util';

export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';

const receiveCities = (cities) => {
    return({
        cities: cities,
        type: RECEIVE_CITIES
    })
};

const receiveCity = city => {
    return({
        city: city,
        type: RECEIVE_CITY
    })
};

export const fetchCities = () => dispatch =>(
    cityUtil.fetchCities().then(cities => 
        dispatch(receiveCities(cities)))
);

export const fetchCity = city => dispatch => {
    cityUtil.fetchCity(city).then(city => {
        dispatch(receiveCity(city))
    })
};