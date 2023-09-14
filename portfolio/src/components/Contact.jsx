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
        <form>
          <h1>Like what you see?</h1>
          <h3>Let's get in touch!</h3>
          <p>
            Please let me know what you're working on and how I might be of
            assistance. I'm searching for a new position right now and I am open
            to a variety of alternatives. I am interested in working remotely.
            However, I'm equally delighted to learn about chances that don't
            fall within that category. I'm a dedicated and upbeat individual who
            will tackle every activity with a feeling of purpose and close
            attention to the details. Please feel free to look at the websites
            I've listed below and to get in touch with me using the form.
          </p>
          <div className="formdetails">
            <Form />
          </div>
        </form>
      </div>
      <Navbottom />
    </div>
  );
}

export default Contact;
