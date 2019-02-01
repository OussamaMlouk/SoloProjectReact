import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';

export default class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        };
    }

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleInput = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/SoloProjectAPI/api/user/createUser",
            data: {
                userName: this.state.userName,
                password: this.state.password
            }
        });
        this.props.history.push('/YourPlaylist');
    }
    render() {
        return (
            <div>
                <h1><Text text="Create an account" /></h1>

                <Form>
                    <FormGroup>
                        <Label for="username"></Label>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={this.userNameChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"></Label>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={this.passwordChange} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="confirmPassword"></Label>
                        <Input type="password" name="password" id="confirmPassword" placeholder="Confirm password" />
                    </FormGroup> */}
                </Form>
                <Button type="button" onClick={this.handleInput}>Submit</Button>
            </div>
        );
    }
}

