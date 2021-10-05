import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/'
import EditComponent from './EditComponent';


class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FavData: [],
            showModel: false
        }
    }



    showHandler = () => {
        console.log("show modellllllllllllllllllll")
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

    deleteFavGame = async (gameId) => {
        // deleting the book id
        let newDeletedGame = await axios.delete(`http://localhost:3002/deleteGame?email=${this.props.email}&gameId=${gameId}`);
        this.setState({
            FavData: newDeletedGame.data
        });
    }

    render() {


        return (
            <>
                <hr style={{ color: "red", border: "3px solid" }}>
                </hr>
                <h2 style={{ color: "white ", textAlign: "center", marginBottom: "50px" }}  >Your Favorite Games ♥️</h2>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} >
                    {this.state.FavData.map((element) => {
                        return (
                            <Card style={{ width: '20rem', margin: "10px", backgroundColor: "#c7d5e0" }}>
                                <Card.Img variant="top" src={element.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        {element.short_description}
                                    </Card.Text>
                                    <Card.Footer class="btn-group" role="group" aria-label="Basic example">
                                        <Button style={{ color: "white" }} variant="dark" onClick={() => { this.deleteFavGame(element._id) }}>Remove </Button>
                                        <Button style={{ color: "black", marginLeft: "20px" }} onClick={this.showHandler} variant="dark">✒️</Button>
                                        <Button style={{ color: "white", marginLeft: "20px" }} href={element.game_url} variant="dark">play now</Button>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>

                        )

                    })}

                </div>
                <hr style={{ color: "red", border: "3px solid", marginTop: "50px" }}>
                </hr>



                {/* {this.state.showModel &&
                {
                    this.state.FavData.map((element) => {
                        return (

                            <EditComponent show={this.state.showModel} closeHandler={this.closeHandler}
                                // title= {this.props.element1.title}
                                // thumbnail={this.props.element1.thumbnail}
                                element={this.state.FavData}

                            // description={this.props.element1.short_description}
                            />


                        )
                    })

                }

                } */}
            </>
        )
    }
}

export default ProfileData;