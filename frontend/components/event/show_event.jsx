import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  componentWillMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  handleButton(){
    
    // debugger;
    if (!this.props.currentUserJoin) {
      this.props.event.spots -= 1;
    } else if (this.props.currentUserJoin && this.props.event.spots < 9) {
      this.props.event.spots += 1;
    }
    this.props.updateEvent(this.props.event)
  }

  render() {
    const event = this.props.event;
    if (!event) {
      return <div>There none</div>;
    }

    // debugger
    let joinButton = (
      <button
        onClick={() =>
          this.props.createJoin({
            event_id: this.props.match.params.eventId,
            user_id: this.props.currentUserId
          })
        }
      >
        SIGN ME UP!
      </button>
    );

    let leaveButton = (
      <button onClick={() => this.props.deleteJoin(this.props.event.id)}>
        Leave This Game
      </button>
    );
    let name = "";

    // if (this.props.currentUserJoin) {
    //   event.spots -= 1;
    // } else if (!this.props.currentUserJoin && event.spots < 9) {
    //   event.spots += 1;
    // }

    let actionButton = this.props.currentUserJoin ? leaveButton : joinButton;
    // debugger
    return <div className="show-main">
        <div className="show-content">
          <div className="sidebar">
            <div className="event-box">
              <h1 className="toPlay">JOIN TO PLAY</h1>
              <p className="date">
                ⏰{event.time}
                <br />
              </p>
              <p className="date">
                📅{event.date}
                <br />{" "}
              </p>
              <p className="info">
                🗺{event.city}
                <br />{" "}
              </p>
              <p className="info">📍{event.address}</p>
              <p className="info">🗣{event.url}</p>
              <p className="info">🗣{event.spots}</p>
            </div>
            {/* onClick={this.handleButton.bind(this)} */}
          <div className="side-button" onClick={this.handleButton.bind(this)} >{actionButton}</div>
            <div className="hoop-description">
              <h1>WHAT IS BASKETBALL TIME, EXACTLY? </h1>

              <h2>🍵</h2>
              <p>
                Basketball time is where ten-ish strangers meet at a
                basketball court with a Host to have a fun basketball game.
                It's not about anything in particular.
              </p>

              <p>
                You're meant to know pretty much nothing about the people
                that come, aside from the fact that they all signed up for
                this — just like you. It's self-selecting in that sense.
              </p>

              <p>
                However, it may bring you comfort to know a little something
                about your Host and have fun with them. If so, just keep
                reading
              </p>
            </div>
          </div>
          <div className="show-des">
            <h1 className="meet-host"> Get To Meet Your Host </h1>
            <div className="profile-pic" />
            <p className="story">Description</p>
            <p className="host-description">{event.description}</p>
          </div>
        </div>
      </div>;
  }
}

export default EventShow;
