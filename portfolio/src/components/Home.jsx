import React from 'react'
import Nav from './Nav'
import Perfect from '../images/home.jpg';
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
        <p className='intro-text'>Hi, I am Sunday Marvellous.<br />
        A Computer Engineering Covenant University Student.
        <br />
      <span className='intro-explain'>This is a portfolio containing the projects I carried out during my 6 months SIWES. </span>
      </p>
      <img src={Perfect} alt='picture'/>
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
