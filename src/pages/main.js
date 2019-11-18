import React from 'react';
import smiley from './smiley.png';

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
            <img src={smiley} className="App-logo" alt="logo" />
            <p>
                Welcome to MyFace!
            </p>
            </header>
        </div>
    )
}

export default HomePage;