import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            
                <ul>
                    <li><a class="active" href="/Home">Home</a></li>
                    <li><a href="/YourPlaylist">Your Playlist</a></li>
                    {/* <li><a href="Login">Login</a></li> */}
                    <li><a href="User">User</a></li>
                </ul>
            
        );
    }
}

export default Navbar;