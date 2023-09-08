import React from 'react';
import { useNavigate } from "react-router-dom";
import Github from '../images/github.png';
import Linkedin from '../images/linkedin2.png';
import Twitter from '../images/twitter.png';



function Navbottom() {
    const navigate = useNavigate();
  const handleToHome = () => {
    navigate("/");
  };
  const handleToAbout = () => {
    navigate("/about");
  };
  const handleToPortfolio = () => {
    navigate("/portfolio");
  };
  const handleToContact = () => {
    navigate("/contact");
  };

  return (
    <div className='Navbottom'>
        <div className="navbottom">
          <ul>
          <span className="Formlink" onClick={handleToHome}><li>HOME</li></span>
          <span className="Formlink" onClick={handleToAbout}><li>ABOUT</li></span>
          <span className="Formlink" onClick={handleToPortfolio}><li>PORTFOLIO</li></span>
          <span className="Formlink" onClick={handleToContact}><li>CONTACT ME</li></span>
        </ul>   
        <div className='images'>
           <a href='https://github.com/SundayMarvellous'> <img src={Github} alt='github'/></a>
           <a href='https://github.com/SundayMarvellous'> <img src={Linkedin} alt='linkedin'/></a>
           <a href='https://github.com/SundayMarvellous'> <img src={Twitter} alt='twitter'/></a>
        </div>
        </div>
       
    </div>
  )
}

export default Navbottom
