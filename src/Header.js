import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from './logo.png';
import LoginButton from './components/LoginButten';
import LogoutButton from './components/LogoutButton';


class Header extends React.Component{
    render(){
        return(
            <div id='headDiv'>
            <Navbar id="nav" >
                <Link to="/" id="logo"><img id='headImg' src={logo} alt="logo"/></Link>
                <Navbar.Brand id="title">End Game</Navbar.Brand>
                <Link id="home" to="/">Home</Link>
                <Link id="paddin" to="/store">Store</Link>
                <Link id="paddin" to="/about-us">About-Us</Link>
                <Link id="pro" to="/profile">Profile</Link>
                <LoginButton />
                {this.props.isAuthenticated ? <LoginButton/> : <LogoutButton/>}
            </Navbar>
            </div>

        )
    }
}
export default withAuth0(Header);