import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';

export default class CreateSongForm extends React.Component {
    constructor() {
        super();
        this.state = {
            songName: "",
            albumName: "",
            artistName: "",
            producerName: "",
            year: "",
            userName: "",
            userId: "",
            responseMessage:""
        };
    }

    songNameChange = (event) => {
        this.setState({ songName: event.target.value });
    }

    artistNameChange = (event) => {
        this.setState({ artistName: event.target.value });
    }

    albumNameChange = (event) => {
        this.setState({ albumName: event.target.value });
    }

    producerNameChange = (event) => {
        this.setState({ producerName: event.target.value });
    }

    yearChange = (event) => {
        this.setState({ year: event.target.value });
    }

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    getIdFromUserName = () => {
        axios({
            method: "get",
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/user/getIdFromUsername/" + this.state.userName,
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
            method: "post",
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/song/createSong",
            data: {
                songName: this.state.songName,
                artistName: this.state.artistName,
                albumName: this.state.albumName,
                producerName: this.state.producerName,
                year: this.state.year,
                userId: this.state.userId
            }
         }).then(response => {
            this.setState({
                responseMessage: response.data.message
            })
            alert(this.state.responseMessage);
        });
    }


    render() {
        return (
            <div><h1><Text text="Add a song" /></h1>
                <Form>
                    <Row form>

                        <FormGroup>
                            <Label for="songName" ></Label>
                            <Input type="text" name="songName" id="songName" placeholder="Song" onChange={this.songNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="artistName"></Label>
                            <Input type="text" name="artistName" id="artistName" placeholder="Artist" onChange={this.artistNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="albumName"></Label>
                            <Input type="text" name="albumName" id="albumName" placeholder="Album" onChange={this.albumNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="producerName"></Label>
                            <Input type="text" name="producerName" id="producerName" placeholder="Producer" onChange={this.producerNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="year"></Label>
                            <Input type="text" name="year" id="year" placeholder="Year" onChange={this.yearChange} />
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
