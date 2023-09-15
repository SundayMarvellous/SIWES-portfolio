import React from "react";
import Nav from "./Nav";
import Navbottom from "./Navbottom";
import Interactiveblur from "../images/porfolio/interactiveblur.jpg";
import InteractiveForm from "../images/porfolio/complete-state-desktop.jpg";
import Blur from "../images/blur.jpg";
import Blogblur from "../images/porfolio/blur4blog.jpg";
import Blog from "../images/porfolio/blog.png" ;
import RealEstate from "../images/porfolio/realestate.png";
import Realblur from "../images/porfolio/realblur.jpg";
import Estate from "../images/porfolio/rlestate.png";
import Estateblur from "../images/porfolio/rlblur.jpg";
import Estate2 from "../images/porfolio/rlestate2.png";
import NewsLetter from "../images/porfolio/desktop-design.jpg";
import Newletterblur from "../images/porfolio/newsletterblur.png";
import Newsblur from "../images/porfolio/newsblur.jpg";
import Newshomepage from "../images/porfolio/newshomepage.png";
import Todoblur from "../images/porfolio/todoblur.jpg";
import Todo from "../images/porfolio/to-do list.png";
import Enterblur from "../images/porfolio/enterblur.jpg";
import Entertainment from "../images/porfolio/entertainment.png";
import FSBlur from "../images/porfolio/blur4fs.jpg";
import BMIBlur from "../images/porfolio/blur4bmi.jpg";
import PlanetBlur from "../images/porfolio/blur4planets.jpg";
import Bmicalculator from "../images/porfolio/bmicalculator.jpg";
import Demo from "../images/porfolio/demo.png";
import Planet from "../images/porfolio/planet.png";
import Calculatorblur from "../images/porfolio/calculatorblur.jpg";
import Calculate from "../images/porfolio/calculator.png";
import Calculator from "../images/porfolio/desktop-completed.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Porfolio() {
  // const handleBlur = (event) => {
  //   const blurDivs = event.target.className
  // }
  return (
    <div className="portfolio">
      <Nav />
      <div className="container">
        <div className="containerjnr">
          <div
            className="imagecontainer planet"
            style={{
              backgroundImage: `url(${PlanetBlur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Planet} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Planet Facts Site</h1>
              <p>
                This site provides information about how the planets in Solar
                System are gravitationally to the Sun and the objects that orbit
                it. This is an 8-page fact site for all planets in our solar
                system.
              </p>
              <div className="button" id="planetbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://siwes-projects.vercel.app/" target="_blank">
              <button className="planetbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="entertainment containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>Entertainment Web App</h1>
              <p>
                This multi-page entertainment web app plays a vital role in
                bringing engaging and enjoyable content to users, in form of
                movies and tv series. It had me working with JSON data, routing,
                state management, and search functionality.
              </p>
              <div className="button" id="enterbutton">
                <h5>React</h5>
                <h5>SCSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://siwes-projects-ru6t.vercel.app/" target="_blank">
              <button className="enterbutt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer enter"
            style={{
              backgroundImage: `url(${Enterblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Entertainment} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>Entertainment Web App</h1>
              <p>
                This multi-page entertainment web app plays a vital role in
                bringing engaging and enjoyable content to users, in form of
                movies and tv series. It had me working with JSON data, routing,
                state management, and search functionality.
              </p>
              <div className="button" id="enterbutton">
                <h5>React</h5>
                <h5>SCSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://siwes-projects-ru6t.vercel.app/" target="_blank">
              <button className="enterbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="containerjnr">
          <div
            className="imagecontainer todo"
            style={{
              backgroundImage: `url(${Todoblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Todo} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>To Do App</h1>
              <p>
                This app helps you create a list of everything you need to do
                written down so you don’t forget anything important. By
                prioritising the tasks in the list you plan the order in which
                you’re going to do them and can quickly see what needs your
                immediate attention.
              </p>
              <div className="button" id="todobutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://siwes-projects-cuqy.vercel.app/" target="_blank">
              <button className="todobutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="calculate containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>Calculator App</h1>
              <p>
                A calculator is a device that performs arithmetic operations on
                numbers. Basic calculators can do only addition, subtraction,
                multiplication and division mathematical calculations.
              </p>
              <div className="button" id="calculatorbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Calculator-App/" target="_blank">
              <button className="calculatorbutt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer calculator"
            style={{
              backgroundImage: `url(${Calculatorblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Calculate} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>Calculator App</h1>
              <p>
                A calculator is a device that performs arithmetic operations on
                numbers. Basic calculators can do only addition, subtraction,
                multiplication and division mathematical calculations.
              </p>
              <div className="button" id="calculatorbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Calculator-App/" target="_blank">
              <button className="calculatorbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="interactive containerjnr">
          <div
            className="imagecontainer inter"
            style={{
              backgroundImage: `url(${Interactiveblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={InteractiveForm} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Interactive Card Details Form</h1>
              <p>
                In this site the form and see the card details update in real
                time This site required DOM manipulation and form validation
                skills.
              </p>
              <div className="button" id="interbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Interactive-Card-Details-Form/" target="_blank">
              <button className="interbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="newshomepage containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>News Homepage</h1>
              <p>
                This is a landing page for a news website. This site was created
                with HTML, CSS and JavaScript.
              </p>
              <div className="button" id="newsbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/News-Homepage/" target="_blank">
              <button className="newsbutt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer news"
            style={{
              backgroundImage: `url(${Newsblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Newshomepage} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>News Homepage</h1>
              <p>
                This is a landing page for a news website. This site was created
                with HTML, CSS and JavaScript.
              </p>
              <div className="button" id="newsbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/News-Homepage/" target="_blank">
              <button className="newsbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="agecalculator containerjnr">
          <div
            className="imagecontainer calc"
            style={{
              backgroundImage: `url(${Blur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Calculator} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Age Calculator App</h1>
              <p>
                This app is a tool that allows users to input their date of
                birth and quickly calculate their current age. This app required
                form validation skills.
              </p>
              <div className="button" id="clacbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Age-Calculator-App/" target="_blank">
              <button className="calcbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="demosite containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>Single Page Blog demo</h1>
              <p>
                This site is a demo that shows a template for a fashion
                blogsite. It was one of my first works as a beginner. This site
                was created with HTML and CSS
              </p>
              <div className="button" id="demobutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Single-Page-Site-Demo/" target="_blank">
              <button className="demobutt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer demo"
            style={{
              backgroundImage: `url(${FSBlur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Demo} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>Single Page Blog demo</h1>
              <p>
                This site is a demo that shows a template for a fashion
                blogsite. It was one of my first works as a beginner. This site
                was created with HTML and CSS
              </p>
              <div className="button" id="demobutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Single-Page-Site-Demo/" target="_blank">
              <button className="demobutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="bmicalculator containerjnr">
          <div
            className="imagecontainer bmicalc"
            style={{
              backgroundImage: `url(${BMIBlur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Bmicalculator} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>BMI Calculator App</h1>
              <p>
                Body mass index (BMI) is a tool that healthcare providers use to
                estimate the amount of body fat by using your height and weight
                measurements. This app required layout, JS and HTML form skills.
              </p>
              <div className="button" id="bmibutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href=" https://sundaymarvellous.github.io/BMI-Calculator-App/" target="_blank">
              <button className="bmibutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="newsletter containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>Newsletter Sign-up</h1>
              <p>
                This site is a site for newsletter sign up. It required skills of basic form structure,
                validation, and submission. The success state was also an
                excellent opportunity to work with DOM manipulation. 
              </p>
              <div className="button" id="letterbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Newsletter-signup-/index.html" target="_blank">
              <button className="letterbutt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer letter"
            style={{
              backgroundImage: `url(${Newletterblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={NewsLetter} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>Newsletter Sign-up</h1>
              <p>
                This site is a site for newsletter sign up. It required skills of basic form structure,
                validation, and submission. The success state was also an
                excellent opportunity to work with DOM manipulation. 
              </p>
              <div className="button" id="letterbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Newsletter-signup-/index.html" target="_blank">
              <button className="letterbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="blogsite containerjnr">
          <div
            className="imagecontainer blog"
            style={{
              backgroundImage: `url(${Blogblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Blog} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Blog Site</h1>
              <p>
              This site is a demo that shows a template for a fashion
                blogsite. It was one of my second fashion blog I developed as a beginner. This site
                was created with HTML and CSS
              </p>
              <div className="button" id="blogbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/Fashion-Blog/" target="_blank">
              <button className="blogbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="realestate containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>Real-Estate Site</h1>
              <p>
              This is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item.
              </p>
              <div className="button" id="realbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>Bootstrap</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/RealEstate/" target="_blank">
              <button className="realbutt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer real"
            style={{
              backgroundImage: `url(${Realblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={RealEstate} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>Real-Estate Site</h1>
              <p>
              This is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item.
              </p>
              <div className="button" id="realbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>Bootstrap</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/RealEstate/" target="_blank">
              <button className="realbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="realestate containerjnr">
          <div
            className="imagecontainer estt"
            style={{
              backgroundImage: `url(${Estateblur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Estate} />
          </div>
          <div className="description">
            <div className="description-child">
              <h1>Real Estate Webpage</h1>
              <p>
              This is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item.
              </p>
              <div className="button" id="esttbutton">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/RealEstateWebpage/" target="_blank">
              <button className="esttbutt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div className="realestate containerjnr">
          <div className="description" id="no">
            <div className="description-child">
              <h1>Real-Estate Webpage2</h1>
              <p>
              This is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item.
              </p>
              <div className="button" id="estt2button">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/RealWebpage2/" target="_blank">
              <button className="estt2butt">VIEW PROJECT</button>
            </a>
          </div>
          <div
            className="imagecontainer estt2"
            style={{
              backgroundImage: `url(${PlanetBlur})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <LazyLoadImage img src={Estate2} />
          </div>
          <div className="description" id="side">
            <div className="description-child">
              <h1>Real-Estate Webpage2</h1>
              <p>
              This is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item.
              </p>
              <div className="button" id="estt2button">
                <h5>HTML</h5>
                <h5>CSS</h5>
              </div>
            </div>
            <a href="https://sundaymarvellous.github.io/RealWebpage2/" target="_blank">
              <button className="estt2butt">VIEW PROJECT</button>
            </a>
          </div>
        </div>
      </div>
      <Navbottom />
    </div>
  );
}

export default Porfolio;
