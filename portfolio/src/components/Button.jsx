import React from 'react'
import emailjs from '@emailjs/browser';

function Button() {
    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Sending...';
    
       const serviceID = 'default_service';
       const templateID = 'template_5sszv79';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
  return (
    <div>
        <button id="button" type="submit" value="Send">SUBMIT</button>  
    </div>
  )
}

export default Button
