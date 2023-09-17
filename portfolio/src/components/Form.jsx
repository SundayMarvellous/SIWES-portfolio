import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
export default function Form () {
    const form = useRef();
    const navigate = useNavigate();
    // const handleToSuccess = () => {
    //   navigate("/success");
    // };
    
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(`Name: ${name},
  //     Email: ${email},
  //    Message: ${message}`);
  //    };
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
     event.preventDefault();

    emailjs.sendForm('service_qi9ui3a', 'template_5sszv79', form.current, 'MBgWyKLc79T5mPOQj')
  .then((response) => {
      // console.log(result.text);
      // alert('SENT!', response.status, response.text).then ({Success});
      navigate('/success')
  }, (error) => {
    alert('FAILED...', error);
      // console.log(error.text);
  });

}
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <h1>Like what you see?</h1>
      <h3>Let's get in touch!</h3>
      <p>
        Please let me know what you're working on and how I might be of
        assistance. I am interested in working remotely. Please feel free to look at the websites I've listed below and to get in
        touch with me using the form.
      </p>
      <div className="form-details">
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="user_name"
              value={inputs.user_name || ""}
              onChange={handleChange}
              placeholder="Enter your fullname"
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <br />
            <input
              type="email"
              name="user_email"
              value={inputs.user_email || ""}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <br />
            <textarea
              type="text"
              name="message"
              value={inputs.message || ""}
              onChange={handleChange}
              placeholder="Type your Message here..."
            />
          </label>
        </div>
        <button type="submit" id="button" value="Send">SUBMIT</button>
      </div>
    </form>
  );
}

// export default Form
