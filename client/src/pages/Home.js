import React from "react";
import { Link, useLocation } from "react-router-dom";

//components
import ButtonDark from "../components/ButtonDark";
import HomeCarousel from "../components/HomeCarousel";
import ServicesCarousel from "../components/ServicesCarousel";

// Home
export default function Home() {
  const location = useLocation();

  const handleSroll = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      {/* HOME */}
      <div className="home min-h-screen pb-8 flex flex-col gap-10 pt-32 overflow-hidden" id="home">
        <div className="home-text px-6 md:px-8 lg:px-32 flex flex-col lg:flex-row justify-between gap-3 lg:gap-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl capitalize font-medium whitespace-nowrap">
            start your business, <br />
            excel with ours.
          </h1>
          <div className="subheading lg:w-1/2">
            <p className="mb-3 text-accent">
              Scale your business with our digital offerings. From dynamic websites to bespoke software solutions tailored to your needs, we fuel your growth strategy in the digital age.
            </p>
            <Link onClick={() => handleSroll("services")}>
              <ButtonDark text="get started" />
            </Link>
          </div>
        </div>
        <div className="home-carousal h-[0] w-[96%] grow m-auto">
          <HomeCarousel />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about px-6 md:px-8 xl:px-48 py-32" id="about">
        <p className="text-center uppercase text-accent">about us</p>
        <h2 className="text-center capitalize font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-10">better products for faster business</h2>
        <div className="about-cards flex flex-col md:flex-row justify-between lg:justify-center gap-3">
          <div className="about-card-large bg-lightAccent text-dark md:w-1/2 lg:max-w-xl">
            <div className="image-wrapper overflow-hidden">
              <div className="about-card-large-image h-56 md:h-64 hover:scale-110 transition-all" id="about-large-card"></div>
            </div>
            <div className="about-card-large-text py-8 px-5">
              <h3 className="mb-3 text-xl">Integrity</h3>
              <p>
                Guided by a foundation of unwavering integrity and boundless innovation, Proteron Digital stands as a beacon of excellence in the realm of software development. Our journey is rooted
                in a deep commitment to delivering solutions that transcend expectations.
              </p>
            </div>
          </div>
          <div className="about-small-cards flex flex-col justify-between gap-3 md:w-1/2 lg:w-auto">
            <div className="about-small-card flex flex-col md:flex-row bg-lightAccent text-dark h-1/2 lg:max-w-xl">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className="mb-3 text-xl">Precision</h3>
                <p>With a steadfast focus on quality craftsmanship and a flair for creativity, we embark on each project with sincerity and meticulous attention to detail.</p>
              </div>
              <div className="image-wrapper md:w-1/2 order-1 md:order-2 h-56 md:h-auto overflow-hidden">
                <div className="about-small-card-image h-full w-full hover:scale-110 transition-all" id="about-small-card-1"></div>
              </div>
            </div>
            <div className="about-small-card flex flex-col md:flex-row bg-lightAccent text-dark h-1/2 lg:max-w-xl">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className="mb-3 text-xl">Client-oriented</h3>
                <p>At Proteron Digital, we believe in fostering enduring relationships with our clients, characterized by trust, collaboration, and shared success.</p>
              </div>
              <div className="image-wrapper md:w-1/2 order-1 md:order-2 h-56 md:h-auto overflow-hidden">
                <div className="about-small-card-image h-full w-full hover:scale-110 transition-all" id="about-small-card-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="services bg-dark text-light pt-32 pb-32" id="services">
        <div className="services-text px-6 md:px-8 lg:px-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3">offered services</h2>
          <p className="text-accent mb-10">Explore our services: captivating websites, tailor-made software, and more. Elevate your business with our digital expertise.</p>
        </div>
        <div className="services-carousal ml-6 md:ml-8 lg:ml-32">
          <ServicesCarousel />
        </div>
      </div>

      {/* CASE STUDY */}
      <div className="case-study px-6 md:px-8 lg:px-32 pt-32 pb-16" id="case-study">
        <div className="case-study-text flex flex-col md:flex-row mb-10">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3 md:w-1/2">case study</h2>
          <p className="text-accent md:mb-5 md:w-1/2">
            Dive into our success stories, where digital transformations turn challenges into triumphs. From global brands to streamlined software, witness innovation and impact firsthand
          </p>
        </div>
        <div className="case-study-cards flex flex-col md:flex-row gap-3">
          <Link to="/project-drishti" className="col-1 h-56 md:h-auto w-auto md:w-1/2 bg-dark text-light rounded-md overflow-hidden">
            <div className="case-study-card h-full w-full bg-cover bg-center hover:scale-110 transition-all"></div>
          </Link>
          <div className="col-2 md:w-1/2 flex flex-col gap-3">
            <Link to="/project-homsia" className="row-1 h-56 w-auto bg-dark text-light rounded-md overflow-hidden">
              <div className="case-study-card h-full w-full bg-cover bg-center hover:scale-110 transition-all"></div>
            </Link>
            <div className="row-2 flex flex-col md:flex-row gap-3">
              <Link to="/project-teamflow" className="case-study-card col-1 h-56 w-auto md:w-1/2 bg-dark text-light rounded-md overflow-hidden">
                <div className="case-study-card h-full w-full bg-cover bg-center hover:scale-110 transition-all"></div>
              </Link>
              <Link to="/project-something" className="case-study-card col-2 h-56 w-auto md:w-1/2 bg-dark text-light rounded-md overflow-hidden">
                <div className="case-study-card h-full w-full bg-cover bg-center hover:scale-110 transition-all"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact px-6 md:px-8 xl:px-48 pt-32 pb-32" id="contact">
        <div className="contact-text flex flex-col md:flex-row mb-10">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3 md:w-1/2">
            Love to hear from you,
            <br /> Get in touch 👋
          </h2>
          <p className="text-accent md:mb-10 md:w-1/2">Whether it be an inquiry or a something something, we would love for you to get in touch with us. info@proterondigital.com</p>
        </div>
        <div className="contact-form flex justify-center items-center">
          {/* FORM */}
          <form action="" className="w-full">
            <div className="row-1 flex flex-col lg:flex-row gap-5 mb-5 w-full">
              <div className="name flex flex-col w-full">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="mail flex flex-col w-full">
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="row-2 flex flex-col lg:flex-row gap-5 mb-5 w-full">
              <div className="name flex flex-col w-full">
                <label htmlFor="">Platform</label>
                <select name="" id="">
                  <option value="">
                    -
                  </option>
                  <option value="desktop">Desktop</option>
                  <option value="mobile">Mobile</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="mail flex flex-col w-full">
                <label htmlFor="">Category</label>
                <select name="" id="">
                  <option value="">
                    -
                  </option>
                  <option value="csd">Custom Software Development</option>
                  <option value="wad">Web Application Development</option>
                  <option value="mad">Mobile App Development</option>
                  <option value="ecs">E-commerce Solutions</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="dm">Database Management</option>
                  <option value="bs">Blockchain Solutions</option>
                  <option value="apid">API Development</option>
                  <option value="dabi">Data Analytics and Business Intelligence</option>
                </select>
              </div>
            </div>
            <div className="row-3 flex flex-col mb-5">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Let us know about your project"></textarea>
            </div>
            <div className="submitbtn flex justify-end">
              <ButtonDark text="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
