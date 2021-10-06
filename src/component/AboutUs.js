// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './AboutUs.css';
// import hesham from './images/hesham.jpg';
// import tariq from './images/tariq.jpg';
// import ismaeel from './images/ismaeel.jpg';
// import ahmad from './images/ahmad.jpg';
// import qamar from './images/qamar.jpg';

// class AboutUs extends React.Component{
//   render() {
//     return(
//       <><div class='card'>
//         <Card style={{ width: '14rem', height: '12rem'}}>
//           <Card.Img variant="top" src= {hesham} style={{ width: '9rem', height: '12rem'}}/>
//           <Card.Body>
//             <Card.Title>Hesham Hassan</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the bulk of
//               the card's content.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div><div class='card'>
//           <Card style={{ width: '14rem', height: '12rem'}}>
//             <Card.Img variant="top" src= {tariq} style={{ width: '9rem', height: '12rem'}}/>
//             <Card.Body>
//               <Card.Title>Tariq Etoum</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div><div class='card'>
//           <Card style={{ width: '14rem', height: '12rem'}}>
//             <Card.Img variant="top" src= {ismaeel} style={{ width: '9rem', height: '12rem'}}/>
//             <Card.Body>
//               <Card.Title>Ismael Ramadan</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div><div class='card'>
//           <Card style={{ width: '14rem', height: '12rem'}}>
//             <Card.Img variant="top" src= {ahmad} style={{ width: '9rem', height: '12rem'}}/>
//             <Card.Body>
//               <Card.Title>Ahmad AbuRumuh</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div><div class='card'>
//           <Card style={{ width: '14rem', height: '12rem'}}>
//             <Card.Img variant="top" src="holder.js/100px180" style={{ width: '9rem', height: '12rem'}}/>
//             <Card.Body>
//               <Card.Title>Qamar Alkhatib</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div></>
//     )
//   }
// }
// export default AboutUs;

import React from 'react'
import './AboutUs.css';
import hesham from './images/hesham.jpg';
import tariq from './images/tariq.jpg';
import ismaeel from './images/ismaeel.jpg';
import ahmad from './images/ahmad.jpg';
import Button from 'react-bootstrap/Button'
// import qamar from './images/qamar.jpg';
// class teamCard extends Component {
// static defaultProps = {
// team : [
// {src: {ahmad}, name: 'Ahmed Abu Romoh', job: 'aaaaaa', description: 'bbbbbbbbb'}
// ]
// };

// render() {
// return (
// <div>
// {this.props.something.map((p) => (
// <card name={p.name} job= {p.job} description= {p.description}
// ))}

function AboutUs({ name, job, about, img }) {
  return (
    <><div id='all'>
      <div id='first'>
        <div className='card'>
          <div className='upper-container'>
            <div className='image-container'>
              {/* <img src={qamar} height="100px" width="100px" alt='' /> */}
            </div>
          </div>
          <div className="lower-container">
            <h3>Qamar Alkhatib</h3>
            <h4>Web Developer</h4>
            <p>{about}</p>
            <button>Visit Profile</button>
          </div>
        </div><div className='card'>
          <div className='upper-container'>
            <div className='image-container'>
              <img src={tariq} height="100px" width="100px" alt='' />
            </div>
          </div>
          <div className="lower-container">
            <h3>Tariq Etoum</h3>
            <h4>Web Developer</h4>
            <p>It's Tariq Etoum
              I'm Software engineer and web developer
              I've studied Java programming language
              I graduated from ASAC
              I'm 24 years old
              I live in Amman Jordan
            </p>
            <button>Visit Profile</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='upper-container'>
          <div className='image-container'>
            <img src={hesham} height="100px" width="100px" alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3>Hesham Hassan</h3>
          <h4>Web Developer</h4>
          <p>Hello my name is Hisham Hassan I am 22 years old a student at ASAC studying software engineering A little summary about myself I like to solve many problems in general.</p>
          <button>Visit Profile</button>
        </div>


      </div><div className='card'>
        <div className='upper-container'>
          <div className='image-container'>
            <img src={ismaeel} height="100px" width="100px" alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3>Ismaeel Ramadan</h3>
          <h4>Web Developer</h4>
          <p>Hi my name is Ismael Ramadan I'm 23 years old, I'm a Software Engineering student at ASAC, I studied Java programming language, and I'm a Web Developer too.</p>
          <button href="https://github.com/IsmaelLebzo">Visit Profile</button>
        </div>
      </div>
      <div className='card'>
        <div className='upper-container'>
          <div className='image-container'>
            <img src={ahmad} height="100px" width="100px" alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3>Ahmad AbuRumuh</h3>
          <h4>Web Developer</h4>
          <p>Hello, I'm Ahmad AbuRumuh. I have finished 2 years in software engineering at ASAC, and I took the code fellows course to be a web developer.</p>
          <button >Visit Profile</button>
         
        </div>
      </div>
    </div></>
  )
}
export default AboutUs
