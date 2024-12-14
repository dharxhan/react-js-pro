import React from 'react';
import './Html.css';

function Html() {
    return (
        <div>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>

            <div className="hero">
                <h1>On The Drive</h1>
                <p>Feel the adrenaline, embrace the road, and drive into a world of possibilities.</p>
                <p>Your journey starts here.</p>
                <button className="button">Know More</button>
            </div>
        </div>
    );
}

export default Html;
