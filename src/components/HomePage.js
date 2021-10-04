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

        <Carousel.Item id = "Item">
          <img
            src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/03/Downfall-of-RTS-1-720x405.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Strategy  </h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://w0.peakpx.com/wallpaper/732/740/HD-wallpaper-s-t-a-l-k-e-r-shooting-soldier-action-video-game-stalker-stalker-clear-sky-adventure-weapon.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Shooter</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://www.esportstalk.com/wp-content/uploads/2020/03/Top-Moba.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Moba</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://www.neuf.tv/wp-content/uploads/2021/04/11-of-the-best-MMO-games-for-iOS-and-Android-2021.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >MMO</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://www.enduins.com/wp-content/uploads/2020/01/Upcoming-mmorpg-mobile-games.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >MMORPG</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://wallpaper.dog/large/5511021.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Card Games</h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://images.nintendolife.com/a32ebc9eba246/best-racing-games-nintendo-switch.original.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 >Racing </h5>
            <Button variant="outline-primary">Explor!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id = "Item">
          <img
            src="https://images.nintendolife.com/513886e735224/best-fighters.original.jpg"
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