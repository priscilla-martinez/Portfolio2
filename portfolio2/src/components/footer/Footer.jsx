import React from 'react'
import './Footer.css'
import {AiFillLinkedin, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'>Priscilla Martinez</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About Me</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact Me</a></li>
        </ul>

        <div className='footer_socials'>
            <a href='https://www.linkedin.com/in/priscillammartinez/'><AiFillLinkedin /></a>
            <a href='https://github.com/priscilla-martinez'><AiFillGithub/></a>
            <a href='https://twitter.com/codewpriscilla'><AiFillTwitterCircle/></a>
            <a href='codewithpriscilla@gmail.com'><MdEmail/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Priscilla Martinez 2022</small>
        </div>
    </footer>
  )
}

export default Footer