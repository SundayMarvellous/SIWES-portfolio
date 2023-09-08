import React from 'react';
import { useNavigate } from "react-router-dom";


function Nav() {
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
    <div className='Nav'>
      <nav>
        <h1>SM</h1>
        <ul>
          <span className="Formlink" onClick={handleToHome}><li>HOME</li></span>
          <span className="Formlink" onClick={handleToAbout}><li>ABOUT</li></span>
          <span className="Formlink" onClick={handleToPortfolio}><li>PORTFOLIO</li></span>
          <span className="Formlink" onClick={handleToContact}><li>CONTACT ME</li></span>
        </ul>
      </nav>
    </div>
   
  )
}

export default Nav
