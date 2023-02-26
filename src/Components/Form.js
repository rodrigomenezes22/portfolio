
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();
  
    const [ sentEmail, setSentEmail ] = useState(false);
    const [ emailEnviado, setEmailEnviado ] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
      
  
      emailjs.sendForm('service_mna86l9', 'template_6wr6kze', form.current, 'VNOADlxTbV8JQNdjl')
        .then((result) => {
            console.log(result.text);
            setSentEmail(true);
            setEmailEnviado(true);
            handleEmailSent();
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleEmailSent = () => {
        document.getElementById('contact-form').reset();
        setSentEmail(false);
    }
    

    const emailSubmit = () => {
        setEmailEnviado(false);
    }
    

    return (
        <div className='col-sm-12 col-md-4 form-wrapper'>

            <h2 className='bebas text-white text-start'>Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} id="contact-form">

            <input type="text" name="from_name" className='form-control' placeholder='Name' required />

            <input type="email" name="from_email" className='form-control' placeholder='Email' required />

            <input type="tel" name="from_phone"  className='form-control mb-4' placeholder='Phone' required />

            <textarea name="message" className='textarea mb-4' />
            <button type="submit" onClick={()=> setTimeout(emailSubmit, 10000)} className={emailEnviado? 'btn btn-success' : 'btn btn-primary' } id="button-form">
                {emailEnviado? <span className="material-symbols-sharp">check_circle</span> : null}
                {emailEnviado? 'E-mail Enviado' : 'Submit' } 
            </button>
            </form>

    </div>
  )
}

export default Form
