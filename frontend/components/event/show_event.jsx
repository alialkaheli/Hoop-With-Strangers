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

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let date = new Date(event.date).getUTCDay();
    let weekday = weekdays[date];
    const obj = event.date.split("-");
    let yr = obj[0]

    let day = obj[2]
    const monthName = { "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec" };

    let month = monthName[obj[1]].toString();
    let ampm = false;
    let setTime = event.time.split(":")

    if (setTime[0] > 12) {
      setTime[0] -= 12
      ampm = true
    }


    setTime = setTime.join(":")
    if (ampm === true) {
      setTime += "PM"
    } else {
      setTime += "AM"
    }
    let spot;
    if (event.spots < 1) {
      spot = "No spots left"
    } else {
      spot = event.spots + " SEATS LEFT!";
    }

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
              <h1 className="toPlay">JOIN FOR HOOP TIME</h1>
              <div className="show-line" />
              <div className="event-show-event">
                <p className="date">
                  📅 {weekday}, {month} {day}
                  <br />
                </p>
                <p className="date">
                  ⏰{setTime}
                  <br />
                </p>
                <p className="info">📍{event.address}</p>
                <p className="info">
                  🗺{event.city}
                  <br />
                </p>

                <p className="info">🗣{event.url}</p>
                <div className="info-last">
                  ☝🏽 <p className="info">
                    Send to a friend that should be here (especially if you
                    can't come yourself!)
                  </p>
                </div>
              </div>
              <div className="show-line" />
              <p className="info">{spot}</p>
            </div>

            {/* onClick={this.handleButton.bind(this)} */}
            <div className="side-button" onClick={this.handleButton.bind(this)}>
              {actionButton}
            </div>
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
            <p className="info">
              (It'll be helpful to know what they look like when you're
              looking for a group of confused strangers at the basketball
              court.)
            </p>
            <div className="profile-pic" />
            <div className="show-description">
              <p className="story">Description</p>
              <p className="host-description">{event.description}</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default EventShow;
