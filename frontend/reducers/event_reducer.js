import {RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_action';
import merge from 'lodash/merge';

const eventReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            if (Object.keys(action.payload).length){
            return action.payload.events;
            }
            else{
                return action.payload
            }
        case RECEIVE_EVENT:
            return merge({}, state, {[action.event.id]: action.event});
        case REMOVE_EVENT:
            let newState = merge({}, state);
            delete newState[action.eventId];
            return newState;
    
        default:
            return state;
    }
}

export default eventReducer;