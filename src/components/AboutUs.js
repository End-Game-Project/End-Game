

import React from 'react'
import './AboutUs.css';
import hesham from './images/hesham.jpg';
import tariq from './images/tariq.jpg';
import ismaeel from './images/ismaeel.jpg';
import ahmad from './images/ahmad.jpg';
import qamar from './images/qamar.jpeg';


function AboutUs({ name, job, about, img }) {
  return (

    <>
    <div className="made">
      Made by
    </div>
    
    <div id='all'>
      <div id='first'>
        <div className='cardx'>
          <div className='upper-container'>
            <div className='image-container'>
              <img src= {qamar} height="100px" width="100px" alt='' />
            </div>
          </div>
          <div className="lower-container">
            <h3>Qamar Alkhatib</h3>
            <br></br>

            <h4>Web Developer</h4>
            <br></br>

            <p>A highly motivated student currently pursuing an international higher Diploma in
                    software engineering and Looking forward to pursuing a Full-Stack web developer. I like sport,
                    reading books, coding, And Eating!</p>
            <button className="button">Visit Profile</button>
          </div>
        </div><div className='cardx'>
          <div className='upper-container'>
            <div className='image-container'>
              <img className="img" src={tariq} height="100px" width="100px" alt='' />
            </div>
          </div>
          <div className="lower-container">
            <h3>Tariq Etoum</h3>
            <br></br>
            <h4>Web Developer</h4>
            <br></br>

            <p>It's Tariq Etoum
              I'm Software engineer and web developer
              I've studied Java programming language
              I graduated from ASAC
              I'm 24 years old
              I live in Amman Jordan
            </p>


            <button className="button">Visit Profile</button>
          </div>
        </div>
      </div>
      <div className='cardx'>
        <div className='upper-container'>
          <div className='image-container'>
            <img className="img" src={hesham} height="100px" width="100px" alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3>Hesham Hassan</h3>
          <br></br>

          <h4>Web Developer</h4>
          <br></br>

          <p>Hello my name is Hisham Hassan I am 22 years old a student at ASAC studying software engineering A little summary about myself I like to solve many problems in general.</p>

          <button className="button">Visit Profile</button>
        </div>


      </div><div className='cardx' id="lower">
        <div className='upper-container'>
          <div className='image-container'>
            <img className="img" src={ismaeel} height="100px" width="100px" alt='' />
          </div>
        </div>
        <div className="lower-container" >
          <h3>Ismaeel Ramadan</h3>
          <br></br>

          <h4>Web Developer</h4>
          <br></br>

          <p>Hi my name is Ismael Ramadan I'm 23 years old, I'm a Software Engineering student at ASAC, I studied Java programming language, and I'm a Web Developer too.</p>
          <br></br>

          <button  className="button" href="https://github.com/IsmaelLebzo">Visit Profile</button>
        </div>
      </div>
      <div className='cardx'>
        <div className='upper-container'>
          <div className='image-container'>
            <img className="img" src={ahmad} height="100px" width="100px" alt='' />
          </div>
        </div>
        <div className="lower-container">
          <h3>Ahmad AbuRumuh</h3>
          <br></br>

          <h4>Web Developer</h4>
          <br></br>

          <p>Hello, I'm Ahmad AbuRumuh. I have finished 2 years in software engineering at ASAC, and I took the code fellows course to be a web developer.</p>
          <br></br>

          <button className="button">Visit Profile</button>

        </div>
      </div>
    </div></>
  )
}
export default AboutUs
