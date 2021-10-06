import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'
import EditComponent from './EditComponent';


export class FavData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModel: false,
        }
    }



    showHandler = () => {
        // console.log("show modellllllllllllllllllllzzzz")
        this.setState({
            showModel: true,
        })
    }

    closeHandler = () => {
        // console.log("close model")

        this.setState({
            showModel: false
        })
    }




    render() {
        return (
            <>
            <Card  style={{ width: '25rem', margin: "8px", hight: "300px", marginTop: "30px" ,backgroundColor:"#6905057a",color:"#f5f5f5"}}>
                                <Card.Img variant="top" src={this.props.element.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{this.props.element.title}</Card.Title>
                                    <Card.Text>
                                        {this.props.short_description}
                                    </Card.Text>



                                    {this.props.element.didPlayed &&
                                    <>
                                    <Card.Text style={{fontSize:"30px"}}>
                                      I played this 🕹️ 
                                    </Card.Text>
                                    </>
                                    }

                                        
                                    <Card.Footer class="btn-group" role="group" aria-label="Basic example">
                                        <Button style={{ color: "white" }} variant="dark" onClick={() => { this.props.deleteFavGame(this.props.element._id) }}>Remove </Button>
                                        <Button style={{ color: "black", marginLeft: "20px" }} onClick={this.showHandler} variant="dark">✒️</Button>
                                        <Button style={{ color: "white", marginLeft: "20px" }} href={this.props.element.game_url} variant="dark">play now</Button>
                                    
                                    </Card.Footer>
                                </Card.Body>
                            </Card>

                             {this.state.showModel &&
                
                                <EditComponent show={this.state.showModel} closeHandler={this.closeHandler}
                                    //     title= {this.props.element1.title}
                                    //     thumbnail={this.props.element1.thumbnail}
                                    // description={this.props.element1.short_description}
                                    
                                    element={this.props.element}
                                    isplayed={this.props.isplayed}
                                    didPlayed={this.props.didPlayed}
            
                                />
            
                            }
            </>

        )
    }
}

export default FavData
