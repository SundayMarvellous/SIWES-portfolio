import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';
import Button from "./Button";
export const Form = () => {
    const form = useRef();
    
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

//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     //     // generate a five digit number for the contact_number variable
//     //     this.contact_number.value = Math.random() * 100000 | 0;
//     //     // these IDs from the previous steps
//     //     emailjs.sendForm('contact_service', 'contact_form', this)
//     //         .then(function() {
//     //             console.log('SUCCESS!');
//     //         }, function(error) {
//     //             console.log('FAILED...', error);
//     //         });
//     // };
//     event.preventDefault();
//     // console.log(inputs);
//     emailjs.sendForm('service_qi9ui3a', 'template_xenil8b', form.current, 
//     'YOUR_PUBLIC_KEY')
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });

// }
  return (
    <form ref={form}>
      <h1>Like what you see?</h1>
      <h3>Let's get in touch!</h3>
      <p>
        Please let me know what you're working on and how I might be of
        assistance. I'm searching for a new position right now and I am open to
        a variety of alternatives. I am interested in working remotely. However,
        I'm equally delighted to learn about chances that don't fall within that
        category. I'm a dedicated and upbeat individual who will tackle every
        activity with a feeling of purpose and close attention to the details.
        Please feel free to look at the websites I've listed below and to get in
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
              placeholder="David Stephenson"
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
              placeholder="davidstephenson@gmail.com"
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
              placeholder="Type your Message here"
            />
          </label>
        </div>
        <Button />
      </div>
    </form>
  );
}

// export default Form
