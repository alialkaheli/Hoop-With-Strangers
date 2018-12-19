import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import eventsReducer from './event_reducer';
import joinReducer from './join_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  join: joinReducer,
});

export default entitiesReducer;