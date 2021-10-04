
import React from 'react'
import Store from './components/Store'
import Dropdown from 'react-bootstrap/Dropdown'
import './dropDown.css'
import RandomGames from './components/RandomGames'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  

  render() {
    //  const shuffled =this.state.fullgame.sort(() => 0.5 - Math.random());

    let num = 0;

    return (
      <div>
        <h2 id='Storeh2'>Store page </h2>



        <Dropdown >
          <Dropdown.Toggle variant="success" id="dropdown-basic" >
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu onClick={this.props.storeFun}>
            <Dropdown.Item name="ALL" >All</Dropdown.Item>
            <Dropdown.Item name="MMO" >MMO</Dropdown.Item>
            <Dropdown.Item name="MMORPG" >MMORPG</Dropdown.Item>
            <Dropdown.Item name="Shooter" >Shooter</Dropdown.Item>
            <Dropdown.Item name="Strategy" >Strategy</Dropdown.Item>
            <Dropdown.Item name="Moba" >Moba</Dropdown.Item>
            <Dropdown.Item name="card" >Card Games</Dropdown.Item>
            <Dropdown.Item name="Racing" >Racing</Dropdown.Item>
            <Dropdown.Item name="Fighting" >Fighting</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {
          this.props.gameResult1.slice(num, 20).map(element => {
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