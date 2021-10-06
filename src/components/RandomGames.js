import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';

class RandomGames extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullgame: [],

        }

    }

    componentDidMount = async () => {
        // console.log("asdfghjkllkjhgfds");
        let gameUrl = `http://localhost:3002/store`
        let gameResult = await axios.get(gameUrl)
        // console.log(gameResult.data);

        // console.log(gameUrl);


        await this.setState({

            fullgame: gameResult.data,

        })
        // console.log(gameResult.data);

        // console.log('qqqqqqqqqqqqqqqqqqqqqq' + this.state.gameResult1);
    }
    render() {

        const shuffled = this.state.fullgame.sort(() => 0.5 - Math.random());
        let num = 0;

        return (
            <>
                <h2 style={{ color: "white", marginLeft: '30px', marginTop: '50px', marginBottom: '35px' ,borderLeft:"10px solid #690505",marginRight:"30px"}}>   Recent Games</h2>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {
                        shuffled.slice(num, 6).map(element => {

                            return (
                                <>

                                    <Card style={{ margin: '8px', width: '600px' }} className="bg-dark text-white">
                                        <Card.Img src={element.thumbnail} alt="Card image" />
                                        <Card.ImgOverlay>
                                            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", marginTop: "175px" }}>
                                                <Card.Title> {element.title}</Card.Title>
                                                <Card.Text  >
                                                    {element.short_description}
                                                </Card.Text>
                                            </div>
                                            <Button style={{ marginTop: "7px", marginLeft: "220px" }} href={element.game_url} variant="warning"><strong>Try it now</strong></Button>
                                        </Card.ImgOverlay>
                                    </Card>

                                </>
                            )
                        })
                    }


                </div>
            </>
        )
    }
}
export default RandomGames;