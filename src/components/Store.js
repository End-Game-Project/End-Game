import React from 'react'
import { Card, Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: this.props.auth0.user.email,
            added: {},
        }
    }

    idFun = async (e) => {
        e.preventDefault();
        console.log("idddddddddddddd" + this.props.element1.id);
        let gameInfo = {
            email: this.state.email,
            id: this.props.element1.id,
            title:this.props.element1.title,
            thumbnail:this.props.element1.thumbnail,
            short_description:this.props.element1.short_description,
            game_url:this.props.element1.game_url
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

            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.element1.thumbnail} />
                    <Card.Body>
                        <Card.Title> {this.props.element1.title}</Card.Title>
                        <Card.Text>
                            <p> {this.props.element1.short_description}</p>
                        </Card.Text>

                        <Button style={{ marginTop: "7px", marginLeft: "150px" }} onClick={this.idFun} variant="warning"><strong>add to favorite</strong></Button>
                    </Card.Body>
                </Card>
            </div>
        )

    }


}

export default withAuth0(Store);