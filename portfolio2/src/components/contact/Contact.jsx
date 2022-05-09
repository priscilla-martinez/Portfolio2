import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiArrowRight} from 'react-icons/fi'
import {FaLinkedin, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
        <h2 className='contact_title'>Contact Me</h2>

        <div className='container contact_container'>
          <div className='contact_options'>

            <article className='contact_option'>
              <MdOutlineEmail className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>codewithpriscilla@gmail.com</h5>
              <a href="mailto:codewithpriscilla@gmail.com" className='contact_option_link'>
                Send An Email <FiArrowRight />
              </a>
            </article>

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
          </div>

          <form action=''>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact