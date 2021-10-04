import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'
// import Form from 'react-bootstrap/Form'

import Card from 'react-bootstrap/Card';
// import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';

class Store extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.element1.thumbnail} />
                    <Card.Body>
                        <Card.Title>Title: {this.props.element1.title}</Card.Title>
                        <Card.Text>
                            <p>Rate: {this.props.element1.short_description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Store;