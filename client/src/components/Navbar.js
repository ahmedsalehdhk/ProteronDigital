import React from 'react'
import ButtonDark from './ButtonDark';

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between items-center px-6 py-5 md:px-10 md:py-5 border-b border-lightAccent fixed top-0 left-0 w-full bg-light'>
            <div className="logo">logo</div>
            <ul className="nav-links text-accent font-medium hidden md:flex gap-5">
                <li className='capitalize hover:text-dark cursor-pointer'><a href="#home">home</a></li>
                <li className='capitalize hover:text-dark cursor-pointer'><a href="#about">about</a></li>
                <li className='capitalize hover:text-dark cursor-pointer'><a href="#services">services</a></li>
                <li className='capitalize hover:text-dark cursor-pointer'><a href="#case-study">case study</a></li>
                <li className='capitalize hover:text-dark cursor-pointer'><a href="#contact">contact</a></li>
            </ul>
            <div className="hidden md:block">
              <ButtonDark text='contact'/>
            </div>
            <div className="hamburger md:hidden">
              <div className="line h-0.5 w-7 bg-dark mb-1"></div>
              <div className="line h-0.5 w-7 bg-dark"></div>
            </div>
        </nav>
    </div>
  )
}
