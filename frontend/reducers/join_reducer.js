import {CREATEJOIN, DELETEJOIN} from '../actions/join_actions';
import merge from 'lodash/merge';

const joinReducer = (state={}, action)=> {
    Object.freeze(state);
    switch(action.type){
        case CREATEJOIN:
        return merge({}, state, {
            [action.payload.join.user_id]: action.payload.join
          });
        case DELETEJOIN:
            let newState = merge({}, state);
            newState[action.event.id] = action.event;
            delete newState[action.event.id];
            return newState;
        default:
        return state;
    }
}

export default joinReducer;