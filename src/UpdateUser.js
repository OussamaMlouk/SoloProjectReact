import React from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';

export default class UpdateUser extends React.Component {
    constructor() {
        super();
        this.state = {
            oldUserName: "",
            oldPassword: "",
            oldUserId: "",
            newUserName: "",
            newPassword: "",
            newUserId: "0",
            responseMessage:""
        };
    }

    oldUserNameChange = (event) => {
        this.setState({ oldUserName: event.target.value });
    }

    oldPasswordChange = (event) => {
        this.setState({ oldPassword: event.target.value });
    }

    newUserNameChange = (event) => {
        this.setState({ newUserName: event.target.value });
    }

    newPasswordChange = (event) => {
        this.setState({ newPassword: event.target.value });
    }

    getIdFromUserName = () => {
        axios({
            method: "get",
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/user/getIdFromUsername/" + this.state.oldUserName,
            responseType: "json"
        }).then(response => {
            this.setState({
                oldUserId: response.data
            })
        });
    }

    handleInput = () => {
        this.getIdFromUserName();
        axios({
            method: "post",
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/user/updateUser",
            data:
            [{
                userId: this.state.oldUserId,
                userName: this.state.oldUserName,
                password: this.state.oldPassword
            },
            {
                userId: this.state.newUserId,
                userName: this.state.newUserName,
                password: this.state.newPassword
            }]

        }).then(response =>{
            this.setState({
                responseMessage: response.data.message
            })
            alert(this.state.responseMessage);
        });
        
        // this.props.history.push('/YourPlaylist');
    }
    render() {
        return (
            <div>
                <h1><Text text="Update an account" /></h1>

                <Form>
                    <Row form>
                        <FormGroup>
                            <Label for="oldUsername"></Label>
                            <Input type="text" name="oldUsername" id="oldUsername" placeholder="Old username" onChange={this.oldUserNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="oldPassword"></Label>
                            <Input type="password" name="oldPassword" id="oldPassword" placeholder="Old password" onChange={this.oldPasswordChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="newUsername"></Label>
                            <Input type="text" name="newUsername" id="newUsername" placeholder="New username" onChange={this.newUserNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="newPassword"></Label>
                            <Input type="password" name="newPassword" id="newPassword" placeholder="New password" onChange={this.newPasswordChange} />
                        </FormGroup>
                    </Row>
                </Form>

                <Button type="button" onClick={this.handleInput}>Submit</Button>
            </div>
        );
    }
}