import React from 'react'

function Form() {
  return (
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
        <div className='form-details'>
            <div>
                <label>Name: <br />
                <input type="text" placeholder="David Stephenson"/>
                </label> 
            </div>
            <div>
                <label>Email:<br />
                <input type="text" placeholder="davidstephenson@gmail.com"/>
                </label>
            </div>
            <div>
                <label>Message:<br />
                    <textarea type="text" placeholder="Type your Message here"/>
                </label>
            </div>
            <button type='submit'>SUBMIT</button>
            
        </div>
  </form>
    
  )
}

export default Form
