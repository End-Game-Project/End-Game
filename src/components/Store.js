import React from 'react'
import { Card, Button, Modal } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import ModalCards from './ModalCards.js'
class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            added: {},
            showModel: false,
            didPlayed:false,
            // email:''
        }
    }
    showHandler = () => {
        // console.log("show model")
        this.setState({
            showModel: true
        })
    }

    closeHandler = () => {
        // console.log("close model")

        this.setState({
            showModel: false
        })
    }
    isplayed=(boolean)=>{
        // console.log("inside function",boolean);
            this.setState({
            didPlayed:boolean
            })
        }

    idFun = async (e) => {
        e.preventDefault();
        // console.log("idddddddddddddd" + this.props.element1.id);
        let gameInfo = {
            email: this.props.auth0.user.email,
            id: this.props.element1.id,
            title: this.props.element1.title,
            thumbnail: this.props.element1.thumbnail,
            short_description: this.props.element1.short_description,
            didPlayed:false,
            game_url: this.props.element1.game_url
        }
        // console.log("gameeeeeeeeeeeeeeeee" + this.state.email);

        let newGameInfo = await axios.post(`http://localhost:3002/addToFav`, gameInfo)
        // console.log("new gameeeeeeeeeeeeeee" + newGameInfo);
        this.setState({
            added: newGameInfo.data,
            // email:this.props.auth0.user.email
        })
    }

  
        


    render() {


        return (
            <>

                <div>
                    <Card style={{ width: '25rem', margin: "8px", hight: "300px", marginTop: "30px" ,backgroundColor:"#6905057a",color:"#f5f5f5"}}>
                        <Card.Img variant="top" src={this.props.element1.thumbnail} />
                        <Card.Body>
                            <Card.Title> {this.props.element1.title}</Card.Title>
                            <Card.Text>
                                <p style={{ hight: "90px" }}> {this.props.element1.short_description}</p>
                            </Card.Text>

                            {/* <Button style={{ marginTop: "7px", marginLeft: "150px" }} onClick={this.idFun} variant="warning"><strong>add to favorite</strong></Button> */}
                            <Button style={{marginLeft:"130px"}} onClick={this.showHandler}>See more</Button>
                        </Card.Body>
                    </Card>

                </div>

                {this.state.showModel &&

                    <ModalCards show={this.state.showModel} closeHandler={this.closeHandler}
                        // title= {this.props.element1.title}
                        // thumbnail={this.props.element1.thumbnail}
                        element1={this.props.element1} idFun={this.idFun}
                    // description={this.props.element1.short_description}
                    />

                }

                {/* {this.state.showModel &&
<>
                    <EditComponent show={this.state.showModel} closeHandler={this.closeHandler}
                        // title= {this.props.element1.title}
                        // thumbnail={this.props.element1.thumbnail}
                        element1={this.props.element1}
                    // description={this.props.element1.short_description}
                    />
</>
                } */}

            </>
        )

    }


}

export default withAuth0(Store);