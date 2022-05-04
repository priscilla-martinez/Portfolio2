import React from 'react'
import './About.css'
import AboutMe from '../../assets/aboutme.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {FaAward} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
    
      <h2 className='about_me_title'>About Me</h2>

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
              <h5>Bachelor's</h5>
              <small>Mathematics</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Boot Camp</h5>
              <small>Software Engineering </small>
            </article>

            <article className='about_card'>
              <BsSun className='about_icon'/>
              <h5>Hobbies</h5>
              <small>Travel and Yoga </small>
            </article>
          </div>

          <p>
            My name is Priscilla and I am a full stack developer from sunny Southern California. I recently graduated from General Assembly's Software Engineering Immersive program where I learned many skills such as HTML, CSS, JavaScript, React, jQuery, Node.js, Python, and working with SQL and noSQL databases through Django and Mongoose. <br/>Prior to General Assembly, I graduated from California State University Fullerton with a degree in mathematics and completed the single subject math credential program. When I'm not coding I am planning my next travel adventure.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About