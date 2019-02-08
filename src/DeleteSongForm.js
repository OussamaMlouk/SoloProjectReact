import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';

export default class DeleteSongForm extends React.Component {
    constructor() {
        super();
        this.state = {
            songName: "",
            userName:"",
            reponseMessage:""
        };
    }

    songNameChange = (event) => {
        this.setState({ songName: event.target.value });
    }

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleInput = () => {
        axios({
            method: "delete",
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/song/deleteSong/"+this.state.userName+"/"+this.state.songName,
            resonseType: "json"
        }).then(response => {
            this.setState({
                responseMessage: response.data.message
            })
            alert(this.state.responseMessage);
        });
        // this.reloadPage();
    }
    // this.props.history.push('/Home');


    render() {
        return (
            <div><h1><Text text="Remove a song" /></h1>
                <Form>
                    <Row form>

                        <FormGroup>
                            <Label for="songName" ></Label>
                            <Input type="text" name="songName" id="songName" placeholder="Song" onChange={this.songNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userName"></Label>
                            <Input type="text" name="userName" id="userName" placeholder="Username" onChange={this.userNameChange} />
                        </FormGroup>
                    </Row>
                </Form>
                <Button type="button" onClick={this.handleInput}>Submit</Button>
            </div>
        );
    }
}
