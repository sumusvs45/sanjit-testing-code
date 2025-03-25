import React, { useRef,useState } from "react";
import WebFaq from "./WebFaq.jsx";
import { FaPeopleArrows, FaLaptop, FaCalendarCheck, } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import web_hero from "../../../assets/web-hero.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../webservice/WebService.css";
import {motion, useScroll, useTransform ,useInView} from "framer-motion";

import WebProcess from "./webProcess/WebProcess.jsx";

export default function WebService() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };
  

 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
 
  const totalCards = 5;  // Number of cards
 
  // Calculate the X transform based on the index
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalCards - 1) * 100}%`]
  );
 
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalCards - 1 ? prev + 1 : prev));
  };
 
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className="web_app_dev">
      {/* Hero Section */}
      <div className="web_app_dev_hero">
        <motion.div  ref={ref} // Track this div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} className="web_app_dev_hero_two">
          <img src={web_hero} alt="web_App_Development" />
        </motion.div>
        <div className="web_app_dev_hero_one">
          <motion.h1   initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}}className="web_app_dev_hero_h1">Web Development Services for High-Performance Websites</motion.h1>
          <motion.p  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}} >
            At Sanjit Tech Solutions, we follow a streamlined process to ensure
            high-quality websites that align with your business goal.
          </motion.p>
          <motion.button  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}}type="submit">Let's Build</motion.button>
        </div>
      </div>
      
      {/* Why Choose Section */}
      <motion.div   variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref} className="web_app_why_box">
        <p className="web_app_sub-heading">Why Choose Our Web Development Service</p>
        <p className="web_app_sub-text"> Our Web development Process</p>
      </motion.div>
 
       <WebProcess/>

      {/* Properties Section */}
      <div className="web_app_properties">Why Web Development Stands Out</div>
      <div className="web_app_boxes">
        <img className="web_app_webbg-1" src={webbg_lt} alt="Web Background" />
        <div className="web_app_boxes1">
          {[{icon: BiCodeBlock, text: "Custom & Scalable Solutions – Tailor-made websites that grow with your business."},
            {icon: FaPeopleArrows, text: "SEO & Performance Optimized – Faster load times, better rankings, and higher conversions."},
            {icon: FaLaptop, text: "User-Friendly & Responsive – Flawless experience across all devices."}
          ].map((item, index) => (
            <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1.5,ease:'easeOut',delay:index*0.2}} key={index} className={`web-box-${index + 1}`}>
              <div className="web_app_box-icon"><item.icon size={60} /></div>
              <p className="web_app_box_txt">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="web_app_boxes2">
          {[{icon: FaCalendarCheck, text: "Security First Approach – Ensuring top-tier security and protection."},
            {icon: SlGraph, text: "Dedicated Support & Maintenance – Continuous improvements for long-term success."},
            {icon: MdOutlineSecurity, text: "Secure, efficient, high-performing solutions for a flawless user experience."}
          ].map((item, index) => (
            <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1.5,ease:'easeOut',delay:index*0.2}} key={index} className={`web-box-${index + 4}`}>
              <div className="web_app_box-icon"><item.icon size={40} /></div>
              <p className="web_app_box_txt">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <img className="web_app_webbg-2" src={webbg} alt="Web Background" />
      </div>

      {/* FAQ Section */}
      <div className="web_app_faq_container">
        <h4 className="web_app_faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        <WebFaq />
      </div>

      {/* Contact Section */}
      <motion.div  inital={{scale:0}} whileInView={{scale:1.05}} transition={{duration:1.5,ease:'easeOut'}} className="web_app_service-contact">
        <div className="web_app_service-contact-img">
          <img src={CTA_img} alt="Call to Action" />
        </div>
        <div className="web_app_service-contact-content">
          <h1>Empower Your Business with a Custom App</h1>
          <p>
            In today’s digital world, having a custom-built website is more than just an online presence—it’s a powerful business tool that helps you stand out, attract customers, and drive growth.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </motion.div>
    </div>
  );
}
