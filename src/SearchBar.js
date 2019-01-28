import React, { Component } from 'react';
import Text from './Text.js';

class SearchBar extends Component {
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
            <div>
                <form>
                    <label>
                        <br /> Enter Name:<input type="text" onChange={this.updateText} />
                        <button type="button" onClick={this.setText}>UpdateText</button>
                        <Text text={this.state.displayText} />
                    </label>
                </form>
            </div>

        )
    }

}
export default SearchBar;