import React from 'react'
import ButtonDark from './ButtonDark';

export default function Navbar() {
  return (
    <div>
        <nav className=''>
            <div className="logo"></div>
            <ul className="nav-links">
                <li>home</li>
                <li>about</li>
                <li>services</li>
                <li>case study</li>
                <li>contact</li>
            </ul>
            <ButtonDark text='contact'/>
        </nav>
    </div>
  )
}
