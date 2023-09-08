import React from 'react';
import { useNavigate } from "react-router-dom";


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
          <span className="Formlink" onClick={handleToContact}><li>CONTACT</li></span>
        </ul>   
        <div className='images'>
            
        </div>
        </div>
       
    </div>
  )
}

export default Navbottom
