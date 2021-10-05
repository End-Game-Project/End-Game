import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import FavData from './FavData';

class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FavData: [],
            didPlayed: false,
            updateData: []
        }
    }






    componentDidMount = async () => {
        console.log("asdfghjkllkjhgfds");
        let gameUrl = `http://localhost:3002/getFav?email=${this.props.email}`
        let gameResult = await axios.get(gameUrl)
        console.log(gameResult.data);

        console.log(gameUrl);


        await this.setState({

            FavData: gameResult.data,

        })
        console.log(gameResult.data);

        // console.log('qqqqqqqqqqqqqqqqqqqqqq' + this.state.gameResult1);
    }

    deleteFavGame = async (gameId) => {
        // deleting the book id
        let newDeletedGame = await axios.delete(`http://localhost:3002/deleteGame?email=${this.props.email}&gameId=${gameId}`);
        this.setState({
            FavData: newDeletedGame.data
        });
    }

    //update function  
    updateFavList = async (e) => {
        e.preventDefault();
        console.log('update function')
        let gameInfo = {
            email: this.state.email,
            // id: this.props.element1.id,
            // title: this.props.element1.title,
            // thumbnail: this.props.element1.thumbnail,
            // short_description: this.props.element1.short_description,
            // game_url: this.props.element1.game_url,
            didPlayed: this.state.didPlayed
        }

        let newUpdatedList = await axios.put(`http://localhost:3002/updateList?email=${this.state.email}`, gameInfo);
        await this.setState({
            updateData: newUpdatedList.data
        });
        console.log("updateeeeeeeeee" + this.state.updateData);
    }



    render() {

        return (
            <>
                <hr style={{ color: "red", border: "3px solid" }}>
                </hr>
                <h2 style={{ color: "white ", textAlign: "center", marginBottom: "50px" }}  >Your Favorite Games ♥️</h2>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} >
                    {this.state.FavData.map((element) => {
                        return (

                            <FavData element={element} updateFavList={this.updateFavList} deleteFavGame={this.deleteFavGame}/>

                        )

                    })}

                </div>
                <hr style={{ color: "red", border: "3px solid", marginTop: "50px" }}>
                </hr>
               
               
                {/* {this.state.updateData.map((elemet)=>{
    return(

    ) */}
                {/* })} */}
                {/* {
                    this.state.FavData.map((element) => {
                        return (

                             <EditComponent show={this.state.showModel} closeHandler={this.closeHandler}
                                // title= {this.props.element1.title}
                                // thumbnail={this.props.element1.thumbnail}
                                element={this.state.updateData}

                            // description={this.props.element1.short_description}
                            />


                        )
                    })

                } */}



                {/* <Button onClick={this.updateFavList}></Button> */}
                {/* {this.state.showModel &&
                

                } */}
            </>
        )
    }
}

export default ProfileData;