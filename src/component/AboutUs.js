import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import hesham from './images/hesham.jpg';
import tariq from './images/tariq.jpg';
import ismaeel from './images/ismaeel.jpg';
import ahmad from './images/ahmad.jpg';
// import qamar from './images/qamar.jpg';

class AboutUs extends React.Component{
  render() {
    return(
      <><div class='card'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {hesham}/>
          <Card.Body>
            <Card.Title>Hesham Hassan</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div><div class='card'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {tariq}/>
            <Card.Body>
              <Card.Title>Tariq Etoum</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div><div class='card'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {ismaeel} />
            <Card.Body>
              <Card.Title>Ismael Ramadan</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div><div class='card'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {ahmad}/>
            <Card.Body>
              <Card.Title>Ahmad AbuRumuh</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div><div class='card'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Qamar Alkhatib</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div></>
    )
  }
}
export default AboutUs;
