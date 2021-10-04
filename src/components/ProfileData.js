import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/'


class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FavData: [],
        }
    }

    componentDidMount = async () => {
        console.log("asdfghjkllkjhgfds");
        let gameUrl = `http://localhost:3002/getFav?email=${this.props.email}`
        let gameResult = await axios.get(gameUrl)
        console.log(gameResult.data);

        console.log(gameUrl);


        await this.setState({

            FavData: gameResult.data,

        })
        console.log(gameResult.data);

        console.log('qqqqqqqqqqqqqqqqqqqqqq' + this.state.gameResult1);
    }

    deleteFavGame = async (gameId)=> {
       // deleting the book id
        let newDeletedGame = await axios.delete(`http://localhost:3002/deleteGame?email=${this.props.email}&gameId=${gameId}`);
        this.setState({
            FavData: newDeletedGame.data
        });
    }

    render() {

        return (
            <div>
                {this.state.FavData.map((element) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={element.thumbnail} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    {element.short_description}
                                </Card.Text>
                                <Button variant="danger" onClick={() => { this.deleteFavGame(element._id)}}>Delete</Button>
                            </Card.Body>
                        </Card>

                    )

                })}
            </div>
        )
    }
}

export default ProfileData;