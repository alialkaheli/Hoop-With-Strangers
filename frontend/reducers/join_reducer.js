import {CREATEJOIN, DELETEJOIN} from '../actions/join_actions';
import { RECEIVE_EVENTS } from '../actions/event_action';
import merge from 'lodash/merge';

const joinReducer = (state={}, action)=> {
    Object.freeze(state);
    switch(action.type){
        case CREATEJOIN:
        return merge({}, state, {
            [action.payload.join.id]: action.payload.join
          });
        case DELETEJOIN:
            let newState = merge({}, state);
            delete newState[action.join.id];
            return newState;
        case RECEIVE_EVENTS:
          if (action.payload.joins) {
            return action.payload.joins;
          } else {
              return {};
          }
        default:
        return state;
    }
}

export default joinReducer;