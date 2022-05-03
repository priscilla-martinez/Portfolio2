import React from 'react'
import './About.css'
import AboutMe from '../../assets/aboutme.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {FaAward} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>

        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>

          <div className='about_me'>
            <div className='about_me_image'>
              <img src={AboutMe} alt="About Me" />
            </div>
          </div>

          <div className='about_content'>
            <div className='about_cards'>
              <article className='about_card'>
                <GiGraduateCap className='about_icon'/>
                <h5>Degree</h5>
                <small>Bachelor's in Mathematics</small>
              </article>

              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Boot Camp</h5>
                <small>Software Engineering </small>
              </article>

              <article className='about_card'>
                <BsSun className='about_icon'/>
                <h5>Hobbies</h5>
                <small>Travel, Photography, and Yoga </small>
              </article>

            </div>
          </div>

        </div>

    </section>
  )
}

export default About