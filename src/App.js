import React from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';
import Profile from './Profile';
import './App.css'
import HomePage from './components/HomePage'
import axios from 'axios'
import DropDown from './DropDown'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RandomGames from './components/RandomGames';
import LoginButton from './components/LoginButten';
import AlertFun from './components/AlertFun';
import AboutUs from './components/AboutUs'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameResult1: [],
      fullgame: [],
      searchQuery: ''
    }
  }

  async componentDidMount() {
    let gameUrl = `${process.env.REACT_APP_ATLASS}/store`
    let gameResult = await axios.get(gameUrl)
   
    this.setState({
      gameResult1: gameResult.data,
    })

  }

  storeBtn = async (name) => {

    await this.setState({
      searchQuery: name
    })

    let gameUrl = `${process.env.REACT_APP_ATLASS}/getGame?category=${this.state.searchQuery}`
    let gameResult = await axios.get(gameUrl)
 
    this.setState({
      gameResult1: gameResult.data,
    })
  }

  storeFun = async (e) => {
    e.preventDefault();
    await this.setState({
      searchQuery: e.target.name
    })
    if (this.state.searchQuery === 'ALL') {
      let gameUrl = `${process.env.REACT_APP_ATLASS}/store`
      let gameResult = await axios.get(gameUrl)

      this.setState({
        gameResult1: gameResult.data,
      })
    }
    else {
      let gameUrl = `${process.env.REACT_APP_ATLASS}/getGame?category=${this.state.searchQuery}`
      let gameResult = await axios.get(gameUrl)
   
      this.setState({
        gameResult1: gameResult.data,
      })
    }
  }
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage storeBtn={this.storeBtn} />
            </Route>

            <Route  path="/profile">
              {!isAuthenticated ?  <AlertFun/> : <Profile /> }
            </Route>

            <Route  path="/about-us">
              <AboutUs/>
            </Route>
            
            <Route exact path="/Store">

              <section ><RandomGames /> </section>
              <br></br>
              <section ><DropDown storeFun={this.storeFun} gameResult1={this.state.gameResult1} /> </section>
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
