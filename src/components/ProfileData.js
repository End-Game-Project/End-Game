import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import FavData from './FavData';

class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FavData: [],
            didPlayed: false,
            updateData: [],

        }
    }






    componentDidMount = async () => {
        let gameUrl = `http://localhost:3002/getFav?email=${this.props.email}`
        let gameResult = await axios.get(gameUrl)
        console.log(gameResult.data);



        await this.setState({

            didPlayed: gameResult.data.didPlayed,
            FavData: gameResult.data,

        })

    }

    deleteFavGame = async (gameId) => {
        let newDeletedGame = await axios.delete(`http://localhost:3002/deleteGame?email=${this.props.email}&gameId=${gameId}`);
        this.setState({
            FavData: newDeletedGame.data
        });
    }

    updateFavList = async (id) => {
        console.log('update function')
        let gameInfo = {
            email: this.props.auth0.user.email,
            id: id,
            // title: this.props.element1.title,
            // thumbnail: this.props.element1.thumbnail,
            // short_description: this.props.element1.short_description,
            // game_url: this.props.element1.game_url,
            didPlayed: this.state.didPlayed
        }
        console.log("playddddddddddddddddd" + this.state.didPlayed);
        let newUpdatedList = await axios.put(`http://localhost:3002/updateList?email=${this.state.email}`, gameInfo);
        await this.setState({
            FavData: newUpdatedList.data
        });
    }

    isplayed = (boolean, id) => {
        console.log("inside function", boolean);
        this.setState({
            didPlayed: boolean
        })
        this.updateFavList(id)
    }

    render() {

        return (
            <>
               
                <h2 style={{ color: "white ",marginLeft:"65px",borderLeft:"10px solid #690505", marginBottom: "50px" }}  >Your Favorite Games </h2>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} >
                    {this.state.FavData.map((element) => {
                        return (

                            <FavData element={element} updateFavList={this.updateFavList} deleteFavGame={this.deleteFavGame} isplayed={this.isplayed} didPlayed={this.state.didPlayed} />

                        )

                    })}

                </div>
                


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
export default withAuth0(ProfileData);