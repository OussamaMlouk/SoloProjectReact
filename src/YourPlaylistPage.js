import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Text from './Text.js';
import axios from 'axios';
import CreateSongForm from './CreateSongForm.js';
import { Table } from 'reactstrap';
import DeleteSongForm from './DeleteSongForm.js';

export default class YourPlaylistPage extends React.Component {
    constructor() {
        super();
        this.state = {
            songList: [],
            userName: "",
            userId: "",
            responseMessage:""
        };
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

    getSongList = () => {
        
        axios({
            method: "get",
            url: "http://soloproject.uksouth.cloudapp.azure.com:8080/SoloProjectAPI/api/song/getSongList/" + this.state.userName,
            responseType: "json"
        }).then(response => {
            this.setState({
                songList: response.data
            });
        })
    }


    render() {
        return (
            <div><CreateSongForm />
                <br />
                <br />
                <DeleteSongForm />
                <br />
                <br />
                <h1><Text text="Get your playlist" /></h1>
                <Form>
                    <Row>
                        <FormGroup>
                            <Label for="userName"></Label>
                            <Input type="text" name="userName" id="userName" placeholder="Username" onChange={this.userNameChange} />
                        </FormGroup>
                    </Row>
                    <Button type="button" onClick={this.getSongList}>Get your playlist</Button>
                </Form>
                <br />
                <br />
                <div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Producer</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>

                            {(this.state.songList.map((text) =>
                                <tr>
                                    <td>{" " + text.songName + " "}</td>
                                    <td>{" " + text.artistName + " "}</td>
                                    <td>{" " + text.albumName + " "}</td>
                                    <td>{" " + text.producerName + " "}</td>
                                    <td>{" " + text.year + " "}</td>
                                </tr>
                            )
                            )}

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}