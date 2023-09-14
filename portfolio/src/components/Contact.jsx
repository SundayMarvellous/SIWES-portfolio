import React from "react";
import Nav from "./Nav";
import Navbottom from "./Navbottom";
import Bg from "../images/home.jpg";
import blur from "../images/porfolio/interactiveblur.jpg";
import Form from "./Form";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Contact() {
  return (
    <div className="contact">
      <Nav />
      <div className="main">
        <div
          className="main-image"
          style={{
            backgroundImage: `url(${blur})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <LazyLoadImage img src={Bg} className="image" />
        </div>
          <Form />
      </div>
      <Navbottom />
    </div>
  );
}

export default Contact;
