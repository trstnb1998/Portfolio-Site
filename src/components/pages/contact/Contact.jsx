import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { FormControl } from '@mui/base/FormControl'

export default function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4oy8wua', 'template_jegv6wx', form.current, import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
          );
          e.target.reset()
      };
    return (
        <section>
            <div className="container2">
                <div className="contact-box">
                    <h2 className='contact-me'>CONTACT ME</h2>
                    <FormControl>
                        <form ref={form} onSubmit={sendEmail} className='contact-form'>
                            <input type="text" placeholder='Full Name' name='user_name' required />
                            <input type="email" placeholder='Example@gmail.com' name='user_email' required />
                            <input type="text" placeholder='Subject' name='subject' required />
                            <textarea name="message" cols="30" rows="17" placeholder='Type your message here.' required></textarea>
                            <button type='submit' className='contact-btn'>
                                SEND MESSAGE
                            </button>
                        </form>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}
