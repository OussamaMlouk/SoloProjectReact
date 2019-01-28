import React, { Component } from 'react';
import './App.css';
import Text from './Text.js';
import UserRegister from './UserRegister.js'
import Navbar from './Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home.js'

class App extends Component {
  
  render() {
    return (
      
      <div>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
         <Home /> 
        
           
          <body>
            
            {/* <UserRegister /> */}
          </body>
        </div>
    );
  }
}

export default App;