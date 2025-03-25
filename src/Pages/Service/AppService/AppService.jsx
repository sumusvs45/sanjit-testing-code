import React from "react";
import AppFaq from "./AppFaq";
import { FaPeopleArrows } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import app_hero from "../../../assets/app-hero.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../AppService/AppService.css";
import AppProcess from "./AppProcess/AppProcess";
import {useRef} from 'react'
import {motion,useInView} from 'framer-motion'

export default function AppService() {
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
  return (
    <div className="app_dev">
      <div className="app_dev_hero">
        <motion.div className="app_dev_hero_two"   ref={ref} // Track this div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          <img src={app_hero}></img>
        </motion.div>
        <div className="app_dev_hero_one">
          <motion.h1 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}} className="app_dev_hero_h1">
          Innovative App Development for Mobile & Web for Seamless User Experiences 
          </motion.h1>
          <motion.p  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}}>
            Cutting-edge app development solutions designed to deliver seamless
            performance, exceptional user experience, and future-ready
            technology for mobile and web platforms.
          </motion.p>
          <motion.button  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}} type="submit">Let's Build</motion.button>
        </div>
      </div>
      <motion.div   variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref} className="why_box">
        <p className="sub-heading">Why Choose Our  <span className="app-text-hightlight">App Development Service</span></p>
        <p className="sub-text"> Our App development Process</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{opacity:1,y:0}} transition={{duration:1.5,ease:'easeIn'}} className="div">
      <AppProcess/>
      </motion.div>
      
      <div className="properties">Why Our App Development Stands Out</div>
      <div className="boxes">
        <img className="appbg-1" src={webbg_lt} alt="image" />
        <div className="boxes1">
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1.5,ease:'easeOut'}} className="box-1">
            <div className="box-icon">
              <BiCodeBlock size={40} className="icon-code-block" />
            </div>
            <p>User-friendly applications with our custom app development</p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:2.0,ease:'easeOut'}} className="box-2">
            <div className="box-icon">
              <FaPeopleArrows size={40} className="icon-code-block" />
            </div>
            <p>
              User-Friendly Design. Making every interaction intuitive and
              impactful
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:2.5,ease:'easeOut'}}className="box-3">
            <div className="box-icon">
              <FaLaptop size={40} className="icon-code-block" />
            </div>
            <p>
              Seamless, high-performance cross-platform and native app
              development
            </p>
          </motion.div>
        </div>
        <div className="boxes2">
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:3.0,ease:'easeOut'}} className="box-4">
            <div className="box-icon">
              <FaCalendarCheck size={40} className="icon-code-block" />
            </div>
            <p>
              Ongoing maintenance and updates to keep your app running smoothly
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:3.5,ease:'easeOut'}} className="box-5">
            <div className="box-icon">
              <SlGraph size={40} className="icon-code-block" />
            </div>
            <p>
              Integrating cutting-edge tech for enhanced performance and
              scalability
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:4.0,ease:'easeOut'}} className="box-6">
            <div className="box-icon">
              <MdOutlineSecurity size={40} className="icon-code-block" />
            </div>
            <p>
              Secure, efficient, high-performing solutions for a flawless user
              experience
            </p>
          </motion.div>
        </div>
        <img className="appbg-2" src={webbg} alt="image" />
      </div>
      <div className="professional">
        <h1>Why a Professional App is Essential for Business Success</h1>
        <motion.div initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}} className="professinal-boxes">
          <div className="professional-box-one">
            <SiAdguard size={40} className="icon-code-block" />

            <div className="professional-content">
              <h2>Boosts brand and builds customer trust</h2>
              <ul>
                <li>
                  A mobile app keeps your brand directly accessible to
                  customers.
                </li>
                <li>
                  Your app allows users to access your services anytime,
                  anywhere.
                </li>
                
              </ul>
            </div>
          </div>
          <div className="professional-box-two">
            <IoPeopleSharp size={40} className="icon-code-block" />
            <div className="professional-content">
              <h2> Delivers a Seamless User Experience</h2>
              <ul>
                <li>
                  Fast-loading apps reduce bounce rates and increase retention.
                </li>
                <li>
                  An intuitive UI ensures a smooth and enjoyable experience.
                </li>
               
              </ul>
            </div>
          </div>
          <div className="professional-box-three">
            <FaMoneyBillTrendUp size={40} className="icon-code-block" />{" "}
            <div className="professional-content">
              <h2> Increases Revenue and Business Growth</h2>
              <ul>
                <li>
                  Features like push notifications and personalized offers
                  increase conversions.
                </li>
                <li>
                  Ensures higher visibility in app stores and search engines.
                </li>
            
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="faq_container">
        <h4 className="faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <AppFaq />
      </div>
      
      <motion.div inital={{scale:0}} whileInView={{scale:1.05}} transition={{duration:1.5,ease:'easeOut'}}  className="service-contact">
        <div className="service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="service-contact-content">
          <h1>Empower Your Business with a Custom App </h1>
          <p>
            In today’s mobile-first world, having a custom-built app is a
            game-changer for business growth. At Sanjit Tech Solutions, we build
            powerful, secure, and user-friendly apps tailored to your unique
            business needs.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </motion.div>
    </div>
  );
}
