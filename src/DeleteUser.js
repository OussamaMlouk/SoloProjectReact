import React from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';

export default class DeleteUser extends React.Component {
    constructor() {
        super();
        this.state = {
            userName:"",
            userId:""
        };
    }

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
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
        this.getIdFromUserName();
        axios({
            method: "delete",
            url: "http://localhost:8080/SoloProjectAPI/api/User/deleteUser/"+this.state.userId,
            resonseType: "json"
        });
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
                    </Row>
                </Form>
                <Button type="button" onClick={this.handleInput}>Submit</Button>
            </div>
        );
    }
}
