import React from 'react'

function Form() {
  return (
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
  )
}

export default Form
