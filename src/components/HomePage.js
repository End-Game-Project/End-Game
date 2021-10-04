import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import './HomePage.css'
import Carousel from 'react-bootstrap/Carousel'



class HomePahe extends React.Component {
  // render
  render() {
    return (
      <Carousel variant="dark">

        <Carousel.Item id="Item">
          <img
            src="https://wallpapercave.com/wp/wp2287973.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Strategy  </h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://wallpaper.dog/large/11025624.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Shooter</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://images8.alphacoders.com/115/thumb-1920-1156676.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Moba</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://wallpapercave.com/wp/wp8628975.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >MMO</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://i.pinimg.com/originals/17/0a/bd/170abd6694150949fad3d8c43289c50d.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >MMORPG</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://cdn4.idcgames.com/storage/image/1106/game_home_bg_section_2/default.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Card Games</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://images5.alphacoders.com/929/thumb-1920-929552.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Racing </h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="Item">
          <img
            src="https://wallpapercave.com/wp/84S1fUU.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Fighting  </h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }
}

export default HomePahe;