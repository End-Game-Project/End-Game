import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import { Link } from "react-router-dom";
import './Footer.css';


class Footer extends React.Component {
  render() {
    return(
        <div id='Footer'>
      <Navbar >
        <Navbar.Brand id="copyright">&copy;  2021, End Game, Inc. All rights reserved. End Gmae, the End Game logo</Navbar.Brand>
        <Link to="/"><img id='footImg' src={logo} alt="logo"/></Link>
      </Navbar>
      </div>
    );
  }
}

export default Footer;