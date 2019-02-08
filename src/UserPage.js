import React from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';
import UpdateUser from './UpdateUser.js';
import DeleteUser from './DeleteUser.js';

export default class UserPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            responseMessage: ""
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
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/user/createUser",
            data: {
                userName: this.state.userName,
                password: this.state.password
            }
        }).then(response => {
            this.setState({
                responseMessage: response.data.message
            })
            if (this.state.responseMessage!="user has been sucessfully added") {
                alert(this.state.responseMessage);
            }
            else{
            this.props.history.push('/YourPlaylist');
            }
        }
        )
        
}
render() {
    return (
        <div>
            <h1><Text text="Create an account" /></h1>

            <Form>
                <Row form>
                    <FormGroup>
                        <Label for="username"></Label>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={this.userNameChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"></Label>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={this.passwordChange} />
                    </FormGroup>
                </Row>
            </Form>
            <Button type="button" onClick={this.handleInput}>Submit</Button>
            <br />
            <br />
            <UpdateUser />
            <br />
            <br />
            <DeleteUser />
        </div>
    );
}
}

