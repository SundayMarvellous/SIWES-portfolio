import React, { useState } from 'react';
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
  const [isShown, setIsShown] = useState(false);

  const hamburger = () => {
    setIsShown(current => !current);
  }
  return (
    <div className='Nav'>
      <nav>
        <h1>SM</h1>
        <ul className='navbar'>
          <span className="Formlink" onClick={handleToHome}><li>HOME</li></span>
          <span className="Formlink" onClick={handleToAbout}><li>ABOUT</li></span>
          <span className="Formlink" onClick={handleToPortfolio}><li>PORTFOLIO</li></span>
          <span className="Formlink" onClick={handleToContact}><li>CONTACT ME</li></span>
        </ul>
        <div class="hamburger" onClick={hamburger}>
          <div>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
        {isShown && (
        <ul className='sidebar'>
          <span className="Formlink" onClick={handleToHome}><li>HOME</li></span>
          <span className="Formlink" onClick={handleToAbout}><li>ABOUT</li></span>
          <span className="Formlink" onClick={handleToPortfolio}><li>PORTFOLIO</li></span>
          <span className="Formlink" onClick={handleToContact}><li>CONTACT ME</li></span>
        </ul>
         )}
          
      </nav>
    </div>
   
  )
}

export default Nav
