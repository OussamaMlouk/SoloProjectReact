
import React, { Component } from 'react';

class Text extends Component{
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
    render(){
        return(
            <div>
                {this.props.text}
                </div>
        )
    }
}
export default Text;