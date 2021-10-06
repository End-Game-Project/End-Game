import React, { Component } from 'react'
import { Modal, Button, Card } from 'react-bootstrap/'
import Switch from "react-switch";

class EditComponent extends Component {
    constructor() {
        super();
        this.state = { checked: false};
        // this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange= async (checked)=> {
          console.log("hello");
        await this.setState({ checked });
        console.log("checked",this.state.checked);
        this.props.isplayed(this.state.checked,this.props.element._id)
      }
    render() {
        console.log(this.props);
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.closeHandler}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>{this.props.title}</Modal.Title> */}
                    </Modal.Header>
                   
                        <Card style={{ width: '31.1rem', marginLeft: "0.5px", backgroundColor:"#0d1117" }}>
                            <Card.Img variant="top" src={this.props.element.thumbnail} />
                            <Card.Body>
                                <Card.Title style={{ hight: "90px",color:"#f5f5f5" }}> {this.props.element.title}</Card.Title>
                                <Card.Text style={{ hight: "90px",color:"#f5f5f5" }}>
                                    <p > {this.props.element.short_description}</p>
                                    <br></br>
                                    Have you played this?
                                </Card.Text>
                                <Switch id={this.props.element._id} onChange={this.handleChange} checked={this.props.element.didPlayed}  />
                            </Card.Body>
                        </Card>
                    <Modal.Footer>
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
export default EditComponent