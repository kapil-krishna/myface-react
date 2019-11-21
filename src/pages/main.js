import React from 'react';
import crazy from '../resources/images/crazy.png';

function HomePage() {
    return (
        <div className="main">
            <header className="App-header">
            <img src={crazy} className="main-logo" alt="logo" />
            <p>
                Welcome to MyFace!
            </p>
            </header>
        </div>
    )
}

export default HomePage;