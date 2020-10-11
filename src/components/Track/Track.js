import React from 'react';
import './Track.css';

const Track = () => {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track name</h3>
                <p>Track artist | Track album</p>
            </div>
            <button className="Track-action">+</button>
        </div>
    )
}

export default Track;
