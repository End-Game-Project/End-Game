import React, { Component } from 'react'
import { Modal, Button, Card } from 'react-bootstrap/'

class ModalCards extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.closeHandler} style={{backgroundColor:"#6905057a"}} >
                    <Modal.Header  class="btn-close btn-close-white" closeButton >
                        {/* <Modal.Title>{this.props.title}</Modal.Title> */}
                    </Modal.Header >
                    {/* <Modal.Body style={{backgroundColor:"#690505" ,color:"white" ,hight:"30px"}}> */}
                        <Card style={{ width: '31.1rem', marginLeft: "0.5px", backgroundColor:"#0d1117" }}>
                        
                            <Card.Img  variant="top" src={this.props.element1.thumbnail} />
                        <Button style={{ Top: "7px",  }} onClick={this.props.idFun} variant="dark"><strong>❤️</strong></Button>

                            <Card.Body>
                                <Card.Title style={{ hight: "90px",color:"#f5f5f5" }}> {this.props.element1.title}</Card.Title>
                                <Card.Text >
                                    <p style={{ hight: "90px",color:"#f5f5f5" }}> {this.props.element1.short_description}</p>
                                </Card.Text>
                                <Card.Text >
                                    <p style={{ hight: "90px",color:"#f5f5f5",fontWeight:'500'}}>Developer: {this.props.element1.developer} </p>
                                </Card.Text>
                                <Card.Text >
                                    <p style={{ hight: "90px",color:"#f5f5f5",fontWeight:'500' }}> Platform:   {this.props.element1.platform} </p>
                                    <p style={{ hight: "90px",color:"#f5f5f5",fontWeight:'500' }}> Release date:   {this.props.element1.release_date} </p>

                                </Card.Text>

                                <Button style={{ marginTop: "7px", marginLeft: "180px" }} href={this.props.element1.game_url} variant="dark"><strong>Play now</strong></Button>
                           
                            </Card.Body>
                        </Card>
                        {/* </Modal.Body > */}
                    <Modal.Footer >
                        <Button variant="secondary" onClick={this.props.closeHandler}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={this.props.closeHandler}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalCards
