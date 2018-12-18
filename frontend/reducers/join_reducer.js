import {CREATEJOIN, DELETEJOIN} from '../actions/join_actions';
import merge from 'lodash/merge';

const joinReducer = (state={}, action)=> {
    Object.freeze(state);
    switch(action.type){
        case CREATEJOIN:
            
        case DELETEJOIN:

        default:
        return state;
    }
}

export default joinReducer;