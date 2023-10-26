import React from "react";
import { Link, useLocation } from "react-router-dom";

//components
import Card from "../components/Card";
import ButtonDark from "../components/ButtonDark";
import ImageSlider from "../components/ImageSlider";

import img1 from '../assets/home-carousal/home-carousal-image-1.png'
import img2 from '../assets/home-carousal/home-caoursal-image-2.png'
import img3 from '../assets/home-carousal/home-carousal-image-1.png'
const images = [
  img1, img2, img3
];

export default function Home() {
  const location = useLocation();

  const handleSroll = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //JSX starts here
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
        <div className="home-carousal h-[0] grow overflow-hidden bg-light-green-700">
          <ImageSlider images={images} />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about px-6 md:px-8 xl:px-48 py-32" id="about">
        <p className="text-center uppercase text-accent">about us</p>
        <h2 className="text-center capitalize font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-10">better products for faster business</h2>
        <div className="about-cards flex flex-col md:flex-row justify-between lg:justify-center gap-3">
          <div className="about-card-large bg-lightAccent text-dark md:w-1/2 lg:max-w-xl">
            <div className="about-card-large-image h-56 md:h-64" id="about-large-card"></div>
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
              <div className="about-small-card-image md:w-1/2 order-1 md:order-2 h-56 md:h-auto" id="about-small-card-1"></div>
            </div>
            <div className="about-small-card flex flex-col md:flex-row bg-lightAccent text-dark h-1/2 lg:max-w-xl">
              <div className="about-small-card-text py-8 px-5 md:w-1/2 order-2 md:order-1">
                <h3 className="mb-3 text-xl">Client-oriented</h3>
                <p>At Proteron Digital, we believe in fostering enduring relationships with our clients, characterized by trust, collaboration, and shared success.</p>
              </div>
              <div className="about-small-card-image md:w-1/2 order-1 md:order-2 h-56 md:h-auto" id="about-small-card-2"></div>
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
        <div className="services-carousal ml-6 md:ml-8 lg:ml-32 flex gap-3 overflow-x-scroll">
          <Link to="/customsoftware">
            <Card id="CSD" title="Custom Software Development" description="Creating bespoke software solutions tailored to specific business needs" />
          </Link>
          <Link to={"/webapplication"}>
            <Card id="WAD" title="Web Application Development" description="Building dynamic and interactive web applications for various purposes" />
          </Link>
          <Link to={"/mobileapplication"}>
            <Card id="MAD" title="Mobile App Development" description="Designing and developing applications for smartphones and tablets across platforms" />
          </Link>
          <Link to={"/ecommercesolution"}>
            <Card id="ECS" title="E-commerce Solutions" description="Developing online platforms for businesses to sell products or services" />
          </Link>
          <Link to={"/uiux"}>
            <Card id="UIX" title="UI/UX Design" description="Crafting user interfaces and experiences that are intuitive and visually appealing" />
          </Link>
          <Link to={"/databasemanagement"}>
            <Card id="DM" title="Database Management" description="Creating and managing databases to store and organize data efficiently" />
          </Link>
          <Link to={"/blockchainsolution"}>
            <Card id="BS" title="Blockchain Solutions" description="Developing applications based on blockchain technology for various industries" />
          </Link>
          <Link to={"/APIdevelopment"}>
            <Card id="APID" title="API Development" description="Creating APIs to enable interactions between software components" />
          </Link>
          <Link to={"/dataanalytics"}>
            <Card id="DABI" title="Data Analytics and Business Intelligence" description="Providing tools to analyze and visualize data for informed decision-making" />
          </Link>
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
          <div className="case-study-card col-1 h-56 md:h-auto w-auto md:w-1/2 bg-dark text-light rounded-md">1</div>
          <div className="col-2 md:w-1/2 flex flex-col gap-3">
            <div className="case-study-card row-1 h-56 w-auto bg-dark text-light rounded-md">2</div>
            <div className="row-2 flex flex-col md:flex-row gap-3">
              <div className="case-study-card col-1 h-56 w-auto md:w-1/2 bg-dark text-light rounded-md">3</div>
              <div className="case-study-card col-2 h-56 w-auto md:w-1/2 bg-dark text-light rounded-md">4</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact px-6 md:px-8 xl:px-48 pt-32 pb-16" id="contact">
        <div className="contact-text flex flex-col md:flex-row mb-10">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize mb-3 md:w-1/2">
            Love to hear from you,
            <br /> Get in touch 👋
          </h2>
          <p className="text-accent md:mb-10 md:w-1/2">Whether it be an inquiry or a something something, we would love for you to get in touch with us. info@proterondigital.com</p>
        </div>
        <div className="contact-form bg-dark text-light flex justify-center items-center h-96">
          <h1>FORM GOES HERE</h1>
        </div>
      </div>
    </div>
  );
}
