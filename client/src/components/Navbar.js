import React from 'react'
import ButtonDark from './ButtonDark';
import { Link, useLocation } from 'react-router-dom'; 

const handleLinkClick = (id) => {
  const element = document.getElementById(id)
  element && element.scrollIntoView({behavior: 'smooth'})
}

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between items-center px-6 py-5 md:px-10 md:py-5 border-b border-lightAccent fixed top-0 left-0 w-full bg-light'>
            <div className="logo">logo</div>
            <ul className="nav-links text-accent font-medium hidden md:flex gap-5">
                <li className='capitalize hover:text-dark cursor-pointer'><Link onClick={() => handleLinkClick('home')}>home</Link></li>
                <li className='capitalize hover:text-dark cursor-pointer'><Link onClick={() => handleLinkClick('about')}>about</Link></li>
                <li className='capitalize hover:text-dark cursor-pointer'><Link onClick={() => handleLinkClick('services')}>services</Link></li>
                <li className='capitalize hover:text-dark cursor-pointer'><Link onClick={() => handleLinkClick('case-study')}>case study</Link></li>
                <li className='capitalize hover:text-dark cursor-pointer'><Link to="/career">career</Link></li>
            </ul>
            <div className="hidden md:block">
              <Link onClick={() => handleLinkClick('contact')}><ButtonDark text='contact'/></Link>
            </div>
            <div className="hamburger md:hidden">
              <div className="line h-0.5 w-7 bg-dark mb-1"></div>
              <div className="line h-0.5 w-7 bg-dark"></div>
            </div>
        </nav>
    </div>
  )
}
