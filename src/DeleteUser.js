import React from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';

export default class DeleteUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userName:"",
            password:"",
            userId:"",
            response:""
        };
    }

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    getIdFromUserName = () => {
        axios({
            method: "get",
            url: "http://localhost:8080/SoloProjectAPI/api/user/getIdFromUsername/" + this.state.userName,
            responseType: "json"
        }).then(response => {
            this.setState({
                userId: response.data
            })
        });
    }

    handleInput = () => {
        // this.getIdFromUserName();
        axios({
            method: "delete",
            url: "http://localhost:8080/SoloProjectAPI/api/user/deleteUserWithPassword",
            data:
            {
                userName : this.state.userName,
                password: this.state.password
            }
        }).then(response =>{
            this.setState({
                response : response.data.message
            })
            alert(this.state.response);
        })
    }


    render() {
        return (
            <div><h1><Text text="Remove a User" /></h1>
                <Form>
                    <Row form>

                        <FormGroup>
                            <Label for="UserName" ></Label>
                            <Input type="text" name="UserName" id="UserName" placeholder="Username" onChange={this.userNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password" ></Label>
                            <Input type="password" name="password" id="password" placeholder="Password" onChange={this.passwordChange} />
                        </FormGroup>
                    </Row>
                </Form>
                <Button type="button" onClick={this.handleInput}>Submit</Button>
            </div>
        );
    }
}
