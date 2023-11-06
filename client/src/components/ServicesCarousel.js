import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesCarousel() {
  const data = [
    {
      id: "customsoftware",
      title: "Custom Software Development",
      content: "Creating bespoke software solutions tailored to specific business needs",
    },
    {
      id: "webapplication",
      title: "Web Application Development",
      content: "Building dynamic and interactive web applications for various purposes",
    },
    {
      id: "mobileapplication",
      title: "Mobile App Development",
      content: "Designing and developing applications for smartphones and tablets across platforms",
    },
    {
      id: "ecommercesolution",
      title: "E-commerce Solutions",
      content: "Developing online platforms for businesses to sell products or services",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      content: "Crafting user interfaces and experiences that are intuitive and visually appealing",
    },
    {
      id: "databasemanagement",
      title: "Database Management",
      content: "Creating and managing databases to store and organize data efficiently",
    },
    {
      id: "blockchainsolution",
      title: "Blockchain Solutions",
      content: "Developing applications based on blockchain technology for various industries",
    },
    {
      id: "APIdevelopment",
      title: "API Development",
      content: "Creating APIs to enable interactions between software components",
    },
    {
      id: "dataanalytics",
      title: "Data Analytics and Business Intelligence",
      content: "Providing tools to analyze and visualize data for informed decision-making",
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden outline-none" whileTap={{ cursor: "grabbing" }}>
      <motion.div drag="x" dragConstraints={carousel} className="inner-carousel inline-flex gap-3">
        {data.map((datum, index) => {
          return (
            <motion.div className="item" key={index}>
              <ServiceCard title={datum.title} content={datum.content} id={datum.id} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
