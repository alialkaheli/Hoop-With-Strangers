import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div className="class-main">
            <div className="background-pic">
                <div className="color">
                    <div className="hook">
                        <h1 className="m1">Don't play alone</h1>
                        <p className="m2"> But you realize that when you are at a park alone.</p>
                        <Link to="/events" className="b1">Checkout Events</Link>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="detail">
                    <h1 className="detail-title">Show up to play</h1>
                    <p className="mes">You and a few others join a host at a court.</p>
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
            <div className="home-footer">
                <div className='list'>
                    <a href="https://www.facebook.com/ali.alkaheli96">Facebook</a>
                    <a href="https://www.linkedin.com/in/ali-alkaheli-089817124/">LinkedIn</a>
                </div>
                <div className="aboutus">
                <p>Hoop With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.</p>

                <p>We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of having fun. A game that's intentionally unintentional.</p>
                </div>
            </div>
        
        </div>
    )
}

export default HomePage;