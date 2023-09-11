import React from 'react';
import Nav from './Nav'
import Navbottom from './Navbottom';
import Aboutpic from '../images/aboutpic3.jpg';
import Typewriter from './Typewriter';

function About() {
  return (
    <div className='about'>
      <Nav />
      <div className="main">
        <img src={Aboutpic} alt='mypicture' />
        <div className='main-text'> 
        <h1 className='head'>ABOUT</h1>
        <p><Typewriter text="My React App" delay={100} infinite /></p>
        </div>
     
        
      </div>
      
      <Navbottom />
    </div>
  )
}

export default About


