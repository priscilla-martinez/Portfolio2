import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiArrowRight} from 'react-icons/fi'
import {FaLinkedin, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

    // Contact Form w/ EmailJS ------------------------
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_lqjjn3x', 'template_0hmmz6l', form.current, 'wHAg5N77y-1BLqTWI')
        .then((result) => {
            console.log(result.text)
            form.current.reset()
        }, (error) => {
            console.log(error.text)
        })
    }

    // Return ------------------------
    return (
    <section id='contact'>
        <h2 className='contact_title'>Contact Me</h2>

        <div className='container contact_container'>
            <div className='contact_options'>

            <article className='contact_option'>
                <FaLinkedin className='contact_option_icon'/>
                <h4>LinkedIn</h4>
                <h5>Priscilla Martinez</h5>
                <a href="https://www.linkedin.com/in/priscillammartinez/" className='contact_option_link'>Go To Profile <FiArrowRight /></a>
            </article>

            <article className='contact_option'>
                <FaGithubSquare className='contact_option_icon'/>
                <h4>GitHub</h4>
                <h5>Priscilla-Martinez</h5>
                <a href="https://github.com/priscilla-martinez" className='contact_option_link'>Go To GitHub <FiArrowRight /></a>
            </article>

            <article className='contact_option'>
                <FaTwitterSquare className='contact_option_icon'/>
                <h4>Twitter</h4>
                <h5>@CodeWPriscilla</h5>
                <a href='https://twitter.com/codewpriscilla' className='contact_option_link'>
                Go To Twitter <FiArrowRight />
                </a>
            </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label>Send me an Email</label>
                <input type='text' name='name' placeholder='Your Full Name' required />
                <input type='email' name='email' placeholder='Your Email' required />
                <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Email</button>
            </form>
            
        </div>
    </section>
    )
    }

    export default Contact