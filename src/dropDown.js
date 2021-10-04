
import React from 'react'
import axios from 'axios'
import Store from './components/Store'
import Dropdown from 'react-bootstrap/Dropdown'

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameResult1: [],
      searchQuery:''
    
    }

  }
  storeFun = async (e) => {
    e.preventDefault();
    console.log('asdasdasdasdasdasdasdasd');
    await this.setState({
      searchQuery: e.target.name
    })
    let gameUrl = `http://localhost:3002/getGame?category=${this.state.searchQuery}`
    let gameResult = await axios.get(gameUrl)
    console.log(gameResult.data);
    
    console.log(gameUrl);
    
    
    this.setState({
      
      gameResult1: gameResult.data,
      
    })
    console.log(gameResult.data);
    
    console.log('qqqqqqqqqqqqqqqqqqqqqq'+this.state.gameResult1);
  }


 render() {
let num = 1;

    return (
      <div>
        <h2>Store page </h2>

          <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                        Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu onClick={this.storeFun}>
                        <Dropdown.Item name="MMO" >MMO</Dropdown.Item>
                        <Dropdown.Item name="MMORPG" >MMORPG</Dropdown.Item>
                        <Dropdown.Item name="Shooter" >Shooter</Dropdown.Item>
                        <Dropdown.Item name="Strategy" >Strategy</Dropdown.Item>
                        <Dropdown.Item name="Moba" >Moba</Dropdown.Item>
                        <Dropdown.Item name="Card Games" >Card Games</Dropdown.Item>
                        <Dropdown.Item name="Racing" >Racing</Dropdown.Item>
                        <Dropdown.Item name="Fighting" >Fighting</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

       

            {
              this.state.gameResult1.slice(num, 6).map(element => {
                return (
                  <>
                  <Store element1={element}                
                  />
                  </>
                )
              })
            }


   


      </div>
    )
  }

}
export default App