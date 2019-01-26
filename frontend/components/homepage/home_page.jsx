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
                <div className="first-img">image</div>
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
                <div className="first-img">image2</div>
              </div>

              <div className="set-block">
                <div className="first-img">image3</div>
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
        </div>

        <div className="home-footer">
          <div className="list">
            <a href="https://www.facebook.com/ali.alkaheli96">Facebook</a>
            <a href="https://www.linkedin.com/in/ali-alkaheli-089817124/">
              LinkedIn
            </a>
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