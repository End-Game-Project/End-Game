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
    let gameUrl = `http://localhost:3002/store`
    let gameResult = await axios.get(gameUrl)
    console.log(gameResult.data);
    console.log(gameUrl);
    this.setState({
      gameResult1: gameResult.data,
    })

  }

  storeBtn = async (name) => {
    console.log("hi");
    console.log("name" + name);
    await this.setState({
      searchQuery: name
    })

    let gameUrl = `http://localhost:3002/getGame?category=${this.state.searchQuery}`
    let gameResult = await axios.get(gameUrl)
    console.log(gameResult.data);
    console.log(gameUrl);
    this.setState({
      gameResult1: gameResult.data,
    })
    console.log(gameResult.data);
  }

storeFun = async (e) => {
  e.preventDefault();
  console.log('asdasdasdasdasdasdasdasd');
  await this.setState({
    searchQuery: e.target.name
  })
  if (this.state.searchQuery === 'ALL') {
    let gameUrl = `http://localhost:3002/store`
    let gameResult = await axios.get(gameUrl)
    console.log(gameResult.data);
    console.log(gameUrl);
    this.setState({
      gameResult1: gameResult.data,
    })
  }
  else {
    let gameUrl = `http://localhost:3002/getGame?category=${this.state.searchQuery}`
    let gameResult = await axios.get(gameUrl)
    console.log(gameResult.data);
    console.log(gameUrl);
    this.setState({
      gameResult1: gameResult.data,
    })
    console.log(gameResult.data);
  }
  console.log('qqqqqqqqqqqqqqqqqqqqqq' + this.state.gameResult1);
}
render() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage storeBtn={this.storeBtn} />
          </Route>
          <Route exact path="/profile">
            <Profile />
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
