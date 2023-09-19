import React from 'react'
import Nav from './Nav'
// import Perfect from '../images/home.jpg';
import Aboutpic from '../images/aboutpic3.jpg';
import Aboutblur from "../images/porfolio/aboutblur.jpg";
import Homepic from '../images/homepagepic2.jpg';
import Navbottom from './Navbottom';
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';



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
      <span className='intro-explain'>This portfolio contains some of the projects I developed during my 6 months SIWES. </span>
      </div>
      <div className="main-image" style={{backgroundImage: `url(${Aboutblur})`, backgroundRepeat: "no-repeat",  backgroundPosition: "center"}}>
         <LazyLoadImage img src={Aboutpic} className='aboutpic' alt='mypicture'/>
        </div>
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
