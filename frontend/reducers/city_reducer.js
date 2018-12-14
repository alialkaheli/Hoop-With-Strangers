import {RECEIVE_CITIES, RECEIVE_CITY} from '../actions/city_action'
import {merge} from 'lodash';

const citiesReducer = (state = nullCity, action) => {
    switch(action.type){
      case RECEIVE_CITIES:
        return merge.values(action.cities);
      case RECEIVE_CITY:
        return merge.values(action.city);
      default:
        return state;
    }
  }
  
  export default citiesReducer;