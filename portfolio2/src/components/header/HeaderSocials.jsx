import React from 'react'
import {FaLinkedin, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/priscillammartinez/' target="_blank"><FaLinkedin/></a>
        <a href='https://github.com/priscilla-martinez' target="_blank"><FaGithubSquare/></a>
        <a href='https://twitter.com/codewpriscilla' target="_blank"><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials