
import React from 'react'
import { Alert, Button } from 'react-bootstrap/'
import { withAuth0 } from '@auth0/auth0-react';

class AlertFun extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showAlert: false
        }
    }

    componentDidMount = () => {
        this.setState({
            showAlert: true
        })

    }

    closeAlertHandler = () => {
        this.setState({
            showAlert: false
        })
    }

    render() {
        return (
            <div>
                <Alert show={this.state.showAlert} variant="danger">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                       You need to login to use this features
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={this.closeAlertHandler} variant="outline-danger">
                            Close me y'all!
                        </Button>
                    </div>
                </Alert>

            </div>
        )
    }
}
export default withAuth0(AlertFun)
