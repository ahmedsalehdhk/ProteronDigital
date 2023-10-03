import React from "react";
import ButtonDark from "./ButtonDark";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const handleSroll = (id) => {
   if(location.pathname === '/'){
      const element = document.getElementById(id)
      element.scrollIntoView({behavior: 'smooth'})
   }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-5 md:px-10 md:py-5 border-b border-lightAccent fixed z-10 top-0 left-0 w-full bg-light">
      <div className="logo">logo</div>
      <ul className="nav-links text-accent font-medium hidden md:flex gap-5">
        <li className="capitalize hover:text-dark cursor-pointer">
          <Link to={'/'} onClick={() => handleSroll("home")}>home</Link>
        </li>
        <li className="capitalize hover:text-dark cursor-pointer">
          <Link to={'/'} onClick={() => handleSroll("about")}>about</Link>
        </li>
        <li className="capitalize hover:text-dark cursor-pointer">
          <Link to={'/'}  onClick={() => handleSroll("services")}>services</Link>
        </li>
        <li className="capitalize hover:text-dark cursor-pointer">
          <Link to={'/'}  onClick={() => handleSroll("case-study")}>case study</Link>
        </li>
      </ul>
      <div className="nav-button hidden md:block">
        <Link to={'/'}  onClick={() => handleSroll("contact")}>
          <ButtonDark text="contact" />
        </Link>
      </div>
      <div className="hamburger md:hidden">
        <div className="line h-0.5 w-7 bg-dark mb-1"></div>
        <div className="line h-0.5 w-7 bg-dark"></div>
      </div>
    </nav>
  );
}


