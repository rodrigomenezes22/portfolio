import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from './Button'
import Form from './Form'

function Contact() {
  return (
    <div id='contact'>
        <div className='container-fluid'>
        <div className='row'>
          
            <div className='col-sm-12 col-md-8 phone'>
              <div className='contact-wrapper'>
                <h2 className='bebas xl-font'>Contact Me</h2>
                <p>You can call me, message me or submit a form.</p>
                <p>Germany +176 146 72724</p>
                <p>USA +1 561 503 2419</p>
              </div>
            </div>
            
                <Form />
            
        </div>
        </div>

    </div>
  )
}

export default Contact
