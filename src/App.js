import React, { Component } from 'react';
import './App.css';
import Text from './Text.js';
import Navbar from './Navbar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.js';
import YourPlaylistPage from './YourPlaylistPage';
import LoginPage from './LoginPage.js';
import UserPage from './UserPage';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {

  render() {
    return (

      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/YourPlaylist" component={YourPlaylistPage} />
            {/* <Route path="/Login" component={LoginPage} /> */}
            <Route path="/User" component={UserPage} />

          </div>
        </BrowserRouter>



        <body>


        </body>
      </div>
    );
  }
}

export default App;