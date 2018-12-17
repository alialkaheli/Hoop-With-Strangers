import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent, updateEvent } from '../../actions/event_action';
import EventForm from './event_form';


const msp = (state, owns) => {
    
    let currEvent = state.entities.events[owns.match.params.eventId]
    return{
        event: currEvent,
        formType: 'Edit Event'
    };
    
}

const mdp = (dispatch)=> {
    return ({
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        action: event => dispatch(updateEvent(event))
    })
}

class EditForm extends React.Component {
    componentDidMount(){
      let id = this.props.match.params.eventId;
      this.props.fetchEvent(id)
    }
    render() {
      const { action, formType, event } = this.props;
      return (
        <EventForm
          action={action}
          formType={formType}
          event={event} />
      );
    }
  }


export default connect(msp, mdp)(EditForm);