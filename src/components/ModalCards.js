import React, { Component } from 'react'
import { Modal, Button, Card } from 'react-bootstrap/'

class ModalCards extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.closeHandler} >
                    <Modal.Header  class="btn-close btn-close-white" closeButton >
                        {/* <Modal.Title>{this.props.title}</Modal.Title> */}
                    </Modal.Header >
                    <Modal.Body style={{backgroundColor:"#0D1117" }}>
                        <Card style={{ width: '25rem', marginLeft: "30px", hight: "300px", marginTop: "7px" }}>
                            <Card.Img variant="top" src={this.props.element1.thumbnail} />
                            <Card.Body>
                                <Card.Title> {this.props.element1.title}</Card.Title>
                                <Card.Text >
                                    <p style={{ hight: "90px" }}> {this.props.element1.short_description}</p>
                                </Card.Text>

                                <Button style={{ marginTop: "7px", marginLeft: "150px" }} onClick={this.idFun} variant="dark"><strong>❤️</strong></Button>
                            </Card.Body>
                        </Card></Modal.Body >
                    <Modal.Footer style={{backgroundColor:"#0D1117" }}>
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
