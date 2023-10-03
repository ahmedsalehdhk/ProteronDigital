import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {

  const location = useLocation();

  const handleSroll = (id) => {
   if(location.pathname === '/'){
      const element = document.getElementById(id)
      element.scrollIntoView({behavior: 'smooth'})
   }
  };

  const redirectURL = (url) => {
    window.location.href = {url}
  }

  return (
    <div className="footer px-6 md:px-8 lg:px-32 pt-24 pb-8 bg-dark text-light">
      <div className="footer-upper flex flex-col md:flex-row mb-10">
        <div className="col-1 md:w-3/5">
          <h2 className="capitalize">proteron</h2>
          <p className="text-accent mb-3">Creating your digital presence.</p>
        </div>
        <div className="col-2 md:w-1/5 mb-3">
          <h3>Company</h3>
          <p className="capitalize text-accent"><Link to='/' onClick={() => handleSroll('about')}>about</Link></p>
          <p className="capitalize text-accent"><Link to='/career'>career</Link></p>
          <p className="capitalize text-accent"><Link to='/'  onClick={() => handleSroll('case-study')}>case studies</Link></p>
        </div>
        <div className="col-3 md:w-1/5">
          <h3>Social</h3>
          <p className="capitalize text-accent"><Link onClick={() => redirectURL('www.facebook.com')}>facebook</Link></p>
          <p className="capitalize text-accent"><Link>instagram</Link></p>
          <p className="capitalize text-accent"><Link>linkedIn</Link></p>
          <p className="capitalize text-accent"><Link>behance</Link></p>
        </div>
      </div>
      <hr className="border-accent"/>
      <div className="footer-lower flex flex-col md:flex-row justify-between mt-5">
        <div className="col-1">
          <p className="text-accent">2023</p>
        </div>
        <div className="col-2">
          <p className="text-accent">Copyright @ Proteron Digital</p>
        </div>
        <div className="col-3">
          <p className="text-accent">Terms and Services</p>
        </div>
      </div>
    </div>
  );
}
