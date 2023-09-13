import React from 'react'
import Nav from './Nav'
// import Perfect from '../images/home.jpg';
import Homepic from '../images/homepagepic2.jpg';
import Navbottom from './Navbottom';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const handleToContact = () => {
    navigate("/contact");
  };
  return (
    <div className='home'>
      <Nav />
      <div className='intro'>
        <div className='intro-text'><p>Hi, I am Sunday Marvellous.<br />
        A Computer Engineering, Covenant University Student.</p>
        <br />
      <span className='intro-explain'>This is portfolio contains some of the projects I developed during my 6 months SIWES. </span>
      </div>
      <img src={Homepic} alt='picture'/>
      </div>
      <div className='getintouch'>
        <p>Interested in <br />working together?</p>
        <hr />
        <button onClick={handleToContact}>GET IN TOUCH</button>
      </div>
      <Navbottom />
    </div>
  )
}

export default Home
