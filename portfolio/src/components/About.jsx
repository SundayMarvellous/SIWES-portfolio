import React from 'react';
import Nav from './Nav'
import Navbottom from './Navbottom';
import Aboutpic from '../images/aboutpic3.jpg';

function About() {
  return (
    <div className='about'>
      <Nav />
      <div className="main">
        <img src={Aboutpic} alt='mypicture' />
        <div className='main-text'> 
        <h1 className='head'>ABOUT</h1>
        </div>
     
        
      </div>
      
      <Navbottom />
    </div>
  )
}

export default About


