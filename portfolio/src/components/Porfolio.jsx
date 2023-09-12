import React from "react";
import Nav from "./Nav";
import Navbottom from "./Navbottom";
import Blur from "../images/blur.jpg";
import FSBlur from "../images/porfolio/blur4fs.jpg";
import BMIBlur from "../images/porfolio/blur4bmi.jpg";
import PlanetBlur from "../images/porfolio/blur4planets.jpg";
import Bmicalculator from "../images/porfolio/bmicalculator.jpg"
import Demo from "../images/porfolio/demo.png";
import Planet from "../images/porfolio/planet.png"
import Calculator from "../images/porfolio/desktop-completed.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Porfolio() {
  return (
    <div className="portfolio">
      <Nav />
      <div className="container">
      <div className="containerjnr">
          <div className="imagecontainer planet" style={{backgroundImage: `url(${PlanetBlur})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <LazyLoadImage img src={Planet}/>
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Planet Facts Site</h1>
              <p>
                This site provides information about  how the planets in Solar System are gravitationally to the Sun and the objects that orbit it.This
                app was designed with HTML, CSS and JavaScript.
              </p>
              <div className="button" id="planetbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://siwes-projects.vercel.app/" target="_blank"><button className="planetbutt">VIEW PROJECT</button></a>
          </div>
        </div>
        <div className="agecalculator containerjnr">
          <div className="imagecontainer calc" style={{backgroundImage: `url(${Blur})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <LazyLoadImage img src={Calculator}/>
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Age Calculator App</h1>
              <p>
                This app is a tool that allows users to input their
                date of birth and quickly calculate their current age.This
                app was designed with HTML, CSS and JavaScript.
              </p>
              <div className="button" id="clacbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href=""><button className="calcbutt">VIEW PROJECT</button></a>
          </div>
        </div>
        <div className="demosite containerjnr">
          <div className="description">
            <div className="description-child">
              <h1>Single Page Blog demo</h1>
              <p>
                This site is a demo that shows a template for a fashion blogsite. It was one of my first works as a beginner. This site was created with HTML and CSS
              </p>
              <div className="button" id="demobutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href=""><button className="demobutt">VIEW PROJECT</button></a>
          </div>
          <div className="imagecontainer demo" style={{backgroundImage: `url(${FSBlur})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <LazyLoadImage img src={Demo} />
          </div>
        </div>
        <div className="bmicalculator containerjnr">
          <div className="imagecontainer bmicalc" style={{backgroundImage: `url(${BMIBlur})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            < LazyLoadImage img src={Bmicalculator} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>BMI Calculator App</h1>
              <p>
                Body mass index (BMI) is a tool that healthcare providers use to estimate the amount of body fat by using your height and weight measurements.This
                app was designed with HTML, CSS and JavaScript.
              </p>
              <div className="button" id="bmibutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href=""><button className="bmibutt">VIEW PROJECT</button></a>
          </div>
        </div>
      </div>
      <Navbottom />
    </div>
  );
}

export default Porfolio;
