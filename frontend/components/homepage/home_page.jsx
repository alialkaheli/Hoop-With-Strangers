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
                        <Link to="/signup" className="b1">Join a Squat</Link>
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
        
        </div>
    )
}

export default HomePage;