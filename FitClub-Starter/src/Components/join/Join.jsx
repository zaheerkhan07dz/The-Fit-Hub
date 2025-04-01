import React from 'react'
import { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_tay8jr3', 'template_dzty0oj', form.current, 
             'O2Xa36lVGs_uAJe49',
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>

            <span>YOUR BODY</span>
        <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="right-j">
            <input  placeholder='Enter Your Email Address' type="email" name="user_email" />
            <button type='submit'>JOIN NOW</button>
            
        </form>
    </div>
  )
}

export default Join
