import React from 'react'
import { Card, Button, Modal } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import ModalCards from './ModalCards.js'
import EditComponent from './EditComponent.js';
class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: this.props.auth0.user.email,
            added: {},
            showModel: false

        }
    }
    showHandler = () => {
        console.log("showwwwwwwww model")
        this.setState({
            showModel: true
        })
    }

    closeHandler = () => {
        console.log("close model")

        this.setState({
            showModel: false
        })
    }


    idFun = async (e) => {
        e.preventDefault();
        console.log("idddddddddddddd" + this.props.element1.id);
        let gameInfo = {
            email: this.state.email,
            id: this.props.element1.id,
            title: this.props.element1.title,
            thumbnail: this.props.element1.thumbnail,
            short_description: this.props.element1.short_description,
            game_url: this.props.element1.game_url
        }
        console.log("gameeeeeeeeeeeeeeeee" + this.state.email);

        let newGameInfo = await axios.post(`http://localhost:3002/addToFav`, gameInfo)
        console.log("new gameeeeeeeeeeeeeee" + newGameInfo);
        this.setState({
            added: newGameInfo.data
        })
    }

    render() {


        return (
            <>

                <div>
                    <Card style={{ width: '25rem', margin: "8px", hight: "300px", marginTop: "30px" }}>
                        <Card.Img variant="top" src={this.props.element1.thumbnail} />
                        <Card.Body>
                            <Card.Title> {this.props.element1.title}</Card.Title>
                            <Card.Text>
                                <p style={{ hight: "90px" }}> {this.props.element1.short_description}</p>
                            </Card.Text>

                            <Button style={{ marginTop: "7px", marginLeft: "150px" }} onClick={this.idFun} variant="warning"><strong>add to favorite</strong></Button>
                            <Button onClick={this.showHandler}>Show Model</Button>
                        </Card.Body>
                    </Card>

                </div>

                {this.state.showModel &&
                    <>
                        <ModalCards show={this.state.showModel} closeHandler={this.closeHandler}
                            // title= {this.props.element1.title}
                            // thumbnail={this.props.element1.thumbnail}
                            element1={this.props.element1}
                        // description={this.props.element1.short_description}
                        />

                        <EditComponent show={this.state.showModel} closeHandler={this.closeHandler}
                            // title= {this.props.element1.title}
                            // thumbnail={this.props.element1.thumbnail}
                            element1={this.props.element1}
                        // description={this.props.element1.short_description}
                        />
                    </>
                }


            </>
        )

    }


}

export default withAuth0(Store);