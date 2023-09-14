import React from 'react';
import { useNavigate } from "react-router-dom";
import Github from '../images/github.png';
import Linkedin from '../images/linkedin2.png';
import Twitter from '../images/twitter.png';
import Mail from '../images/mail.png';



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
           <a href='https://github.com/SundayMarvellous' target='_blank'> <img src={Github} alt='github'/></a>
           <a href='https://linkedin.com/sundaymarvellous' target='_blank'> <img src={Linkedin} alt='linkedin'/></a>
           <a href='https://twitter.com/smarvellous03' target='_blank'> <img src={Twitter} alt='twitter'/></a>
           <a href='' target='_blank'><img src={Mail}/></a>
        </div>
        </div>
       
    </div>
  )
}

export default Navbottom
