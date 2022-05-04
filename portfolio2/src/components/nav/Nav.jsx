import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}>
        <AiFillHome/>
      </a>

      <a href="#about" onClick={()=> setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}>
        <BsPersonFill/>
      </a>

      <a href="#skills" onClick={()=> setActiveNav('#skills')} className = {activeNav === '#skills' ? 'active' : ''}>
        <BiBook/>
      </a>

      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}>
        <RiServiceFill/>
      </a>
      <a href="#contact" onClick={()=> setActiveNav('#contanct')} className = {activeNav === '#contanct' ? 'active' : ''}>
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}

export default Nav