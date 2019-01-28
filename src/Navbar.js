import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
          <ul>
                    <li><a class="active" href="/home">Home</a></li>
                    <li><a href="/YourPlaylist">Your Playlist</a></li>
                    <li><a href="Login">Login</a></li>
                    <li><a href="Register">Register</a></li>
                </ul>
          </BrowserRouter>
    );
  }
}

export default Navbar;