import React from 'react';
import logo from './BackgroundImage.jpg';
import Text from './Text.js';
import SearchBar from './SearchBar.js';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <header className="App-header">
                        <div id="content-stuff">
                            <img src={logo} className="App-logo" alt="logo" />
                            <div id="content-over-image">
                                <h1><Text text="KANYE-TABASE"  /></h1>
                                <p>Make your own Kanye West playlist</p>
                            </div>
                        </div>
                    </header>
                </div>
            </header>
        </div>
    )
}

export default Home;