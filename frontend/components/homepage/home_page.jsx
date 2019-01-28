import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return <div className="class-main">
        <div className="background-pic">
          <div className="color">
            <div className="hook">
              <h1 className="m1">Don't play alone</h1>
              <p className="m2">
                {" "}
                But you realize that when you are at a park alone.
              </p>
              <Link to="/events" className="b1">
                Checkout Events
              </Link>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="detail">
            <h1 className="detail-title">Show up to play</h1>
            <p className="mes">
              You and a few others join a host at a court.
            </p>
          </div>
          <div className="detail">
            <h1 className="detail-title">Talk and play</h1>
            <p className="mes">You will talk and have fun playing.</p>
          </div>
          <div className="detail">
            <h1 className="detail-title">See who wins</h1>
            <p className="mes">That's it. No strings attached.</p>
          </div>
        </div>

        <div className="parent-splash">
          <div className="splash-info">
            <p className="hook">SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</p>
            <div className="first-info-set">
              <div className="set-block">
                <div className="first-img" />
                <div className="description-splash">
                  <h1 className="detail-title">It’s weird.</h1>
                  <p className="mes">
                    Everyone at tea time is stepping a little out of their
                    comfort zone. This makes it so much easier to actually
                    learn something unexpected about the people around you.
                    Because open minds are a prerequisite around here.
                  </p>
                </div>
              </div>

              <div className="set-block">
                <div className="description-splash">
                  <h1 className="detail-title">We won't meet otherwise.</h1>
                  <p className="mes">
                    In all likelihood, our paths won’t cross for any reason.
                    So often, we only meet people through work, school, or
                    friends of friends. And even then, it’s questionable. So
                    basically, we manufacture serendipity.
                  </p>
                </div>
                <div className="second-img" />
              </div>

              <div className="set-block">
                <div className="third-img" />
                <div className="description-splash">
                  <h1 className="detail-title">
                    Your hands are made for high fiving!
                  </h1>
                  <p className="mes">
                    And your eyes are made…for eye contact! Real humans are
                    so much cooler than their tweets or Instagram pictures.
                    Tea time has real humans! #nofilter!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="talk-and-play">
            <h1>Actually talk with people.</h1>
            <Link to="/events" className="b1">
              Checkout Events
            </Link>
          </div>

          <div className="user-commment-sec">
            <div className="comment">
              <p>
                ”I met people who I continue to be in touch with almost a year later, and people who I shared delightful conversations with that day but no more. Both are their own kind of fun.”<span className="name-color">
                  Freia, NYC
                </span>
              </p>
              <div className="comment-line" />
            </div>
            <div className="comment">
              <p>
                ”I’m not the type of person who talks to strangers. This doesn’t mean I don’t want to. Tea With Strangers just makes it easier because you know everyone there wants it too.”<span className="name-color">
                  Molly, SF
                </span>
              </p>
              <div className="comment-line" />
            </div>
          </div>
          <div className="fourth-img" />

          <div className="last-content">
            <p className="hook">THERE'S NO SUCH THING AS A STRANGER.</p>
            <div className="no-stranger-quote">
              <div className="last-img" />
              <div className="description-splash">
                <p className="stranger-mes">
                  You'd never think of yourself as a stranger. But everyone
                  else does. You know your story. Your embarrassments. Your
                  joy. Your idiocyncrasies — the thing that make you, you.
                  But they don't.
                </p>
                <p className="stranger-mes">
                  And everyone has these — whether or not we know what they
                  are. Everyone around you is a person, loaded with stories
                  that you can't even begin to fathom. They're different
                  from yours, but the fact that we all have them is what
                  brings us together.
                </p>
                <p className="stranger-mes">
                  In a stranger's story, we might discover parts of our own.
                  And in seeing where a stranger is coming from, we might
                  realize they're actually not so strange. But we don't
                  discover much just by thinking about it. So let's find
                  out.
                </p>
              </div>
            </div>
          </div>

          <div className="talk-and-play">
            <h1>Do we get to high five yet?</h1>
            <Link to="/events" className="b1">
              Yes
            </Link>
          </div>
        </div>

        <div className="home-footer">
          <div className="list">
          <div className="list-position">
            <a className="no-cursor" href="#">About</a>
            <Link to="/events">Hoop Times</Link>
            <a href="https://www.facebook.com/ali.alkaheli96">Facebook</a>
            <a href="https://www.linkedin.com/in/ali-alkaheli-089817124/">
              LinkedIn
            </a>
            <br />
            <a className="no-cursor" href="#">Terms of Service</a>
            <a className="no-cursor" href="#">Privacy Policy</a>
          </div>
        </div>
          <div className="aboutus">
            <p>
              Hoop With Strangers is all about making our cities feel more
              like neighborhoods. We're more "connected" than ever before,
              but we're also more alone. And all we want to do is bring
              people together because, well, the world is better that way.
            </p>

            <p>
              We're not doing anything groundbreaking. We're creating
              something that would've been incredibly unnecessary 20 years
              ago. But while we get busier, it's easy to forget the value of
              having fun. A game that's intentionally unintentional.
            </p>
          </div>
        </div>
      </div>;
}

export default HomePage;