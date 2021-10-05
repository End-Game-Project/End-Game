import React, { Component } from 'react'
import { Modal, Button, Card } from 'react-bootstrap/'

class EditComponent extends Component {

    render() {
        console.log(this.props.element);
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.closeHandler}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>{this.props.title}</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <Card style={{ width: '25rem', margin: "8px", hight: "300px", marginTop: "30px" }}>
                            <Card.Img variant="top" src={this.props.element.thumbnail} />
                            <Card.Body>
                                <Card.Title> {this.props.element.title}</Card.Title>
                                <Card.Text>
                                    <p style={{ hight: "90px" }}> {this.props.element.short_description}</p>
                                </Card.Text>

                            </Card.Body>
                        </Card></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeHandler}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.closeHandler}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>



        )
    }
}
export default EditComponent