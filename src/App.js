import React from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';
import Profile from './Profile';
import './App.css'
import HomePage from './components/HomePage'
// import Store from './components/Store'
import DropDown from './DropDown'
// import LoginButton from './components/LoginButten.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {


  render() {
    // const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/Store">
              <DropDown />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
