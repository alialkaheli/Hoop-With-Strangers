import * as EventUtil from '../util/event_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events: events
});

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
}); 

const removeEvent = event => ({
    type: REMOVE_EVENT,
    eventId: event.id
})

export const fetchEvents = () => dispatch => {
    return EventUtil.fetchEvents().then(events => 
        dispatch(receiveEvents(events)))
}

export const fetchEvent = (event) => dispatch => {
    return EventUtil.fetchEvent(event.id).then(event => 
        dispatch(receiveEvent(event)))
}

export const createEvent = (event) => dispatch => {
    return EventUtil.createEvent(event).then(event => 
        dispatch(receiveEvent(event)))
}

export const updateEvent = (event) => dispatch => {
    return EventUtil.updateEvent(event).then(event => 
        dispatch(receiveEvent(event)))
}

export const deleteEvent = (event) => dispatch => {
    return EventUtil.deleteEvent(event.id).then(event => 
        dispatch(removeEvent(event)))
}

