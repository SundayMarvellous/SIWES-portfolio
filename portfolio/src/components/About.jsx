import React from 'react';
import Nav from './Nav'
import Navbottom from './Navbottom';
import Aboutpic from '../images/aboutpic3.jpg';
import Aboutblur from "../images/porfolio/aboutblur.jpg";
import Typewriter1 from './Typewriter';
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function About() {
  return (
    <div className='about'>
      <Nav />
      <div className="main">
        <div className="main-image" style={{backgroundImage: `url(${Aboutblur})`, backgroundRepeat: "no-repeat",  backgroundPosition: "center"}}>
          <LazyLoadImage img src={Aboutpic} className='aboutpic' alt='mypicture' />
        </div>
        <div className='main-text'> 
        <h1 className='main-head'>ABOUT</h1>
        <h2 className='main-description'>
          <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Student")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Team Player")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Creative Problem Solver")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Empathetic")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Designer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Front-End Developer")
              .start();
          }}
          />
        </h2>
        <p className='main-explanation'>I am Sunday Marvellous, a Computer Engineering Student in Covenant University. I have developed an interest in Front-End Development. This portfolio would be Portraying the <span>Front-end development and Programming</span> skills I acquired during the 6 months period of my SIWES at Ha-shem Limited.
        <br />
        This portfolio would contain projects for which I used HTML, CSS, SCSS, JavaScript, Bootstrap, React, to build.</p>
        </div>
     
        
      </div>
      
      <Navbottom />
    </div>
  )
}

export default About


