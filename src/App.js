import React, { Component } from 'react';
import './App.css';
import Text from './Text.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      displayText: ""
    }

    this.updateText = (event) => {
      this.setState({
        inputText: event.target.value
      });
    }

    this.setText = () => {
      this.setState({
        displayText: this.state.inputText
      });
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1><Text text="KANYE-TABASE" /></h1>
          <p><Text text="Search for all your favourite Kanye West songs, and add them to your playlist" /></p>
          <form>
            <label>
              <br /> Enter Song Title:<input type="text" onChange={this.updateText} />
              <button type="button" onClick={this.setText}>Search</button>
              <Text text={this.state.displayText} />
            </label>
          </form>
        </header>
        <body>
        </body>
      </div>
    );
  }
}

export default App;