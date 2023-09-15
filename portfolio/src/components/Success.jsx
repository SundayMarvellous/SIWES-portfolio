
import React from 'react';
// import { name } from "./Form"
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Icon from "../images/porfolio/icon-success.svg"
// import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

function Success() {
  const [pieces, setPieces] = useState(500);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  const navigate = useNavigate();
  const handleToForm = () => {
    navigate('/contact');
  };

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <div className='successmessage'>
      <img src={Icon} />
      <h1>Thank you </h1>
      <p>I appreciate you reaching out, Your message has been sent to me. I would get back to you.</p>
      <button onClick={handleToForm}>CONTINUE</button>
      <Confetti gravity={0.2} numberOfPieces={pieces} />

    </div>
  )
}

export default Success
