import React from "react";
import SoftwareFaq from "./SoftwareFaq";
import { FaPeopleArrows } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
// import app_icon from "../../../assets/app development 1.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import '../Software/Software.css'
import SoftwareProcess from "../Software/softwareProcess/SoftwareProcess.jsx";
import {useRef} from 'react'
import {motion,useInView} from 'framer-motion'



export default function Software() {
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
    <div className="software-dev">
      <div className="software-dev_hero">
        <motion.div  ref={ref} // Track this div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} className="software-dev_hero_two">
          <img src={app_icon}></img>
        </motion.div>
        <div className="software-dev_hero_one">
          <motion.h1 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}} className="software-dev_hero_h1">
          Unlock the Power of Software Development with Sanjit Tech Solutions

          </motion.h1>
          <motion.p  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}}>
          We build custom software solutions tailored to your business needs, helping you streamline operations, enhance customer experiences, and drive digital transformation
          </motion.p>
          <motion.button  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}} type="submit">Let's Build</motion.button>
        </div>
      </div>
      <motion.div  variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref} className="why_box">
        <p className="software-sub-heading">Why Choose Our Software Service</p>
        <p className="software-sub-text"> Our Software  development Process</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{opacity:1,y:0}} transition={{duration:1.5,ease:'easeIn'}} className="div">
      <SoftwareProcess/>
      </motion.div>
     

      <div className="software-properties">Why Our Software Services Stand Out</div>
      <div className="software-boxes">
        <img className="software-webbg-1" src={webbg_lt} alt="image" />
        <div className="software-boxes1">
          <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1.5,ease:'easeOut'}} className="software-box-1">
            <div className="software-box-icon">
              <BiCodeBlock size={40} className="software-icon-code-block" />
            </div>
            <p>Custom-built solutions designed to fit your specific business</p>
          </motion.div>
          <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:2.0,ease:'easeOut'}}className="software-box-2">
            <div className="software-box-icon">
              <FaPeopleArrows size={40} className="software-icon-code-block" />
            </div>
            <p>
            We utilize the latest programming languages, frameworks, and tools.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:2.5,ease:'easeOut'}}className="software-box-3">
            <div className="software-box-icon">
              <FaLaptop size={40} className="software-icon-code-block" />
            </div>
            <p>Our software evolves with your business growth.</p>
          </motion.div>
        </div>
        <div className="software-boxes2">
          <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:3.0,ease:'easeOut'}} className="software-box-4">
            <div className="software-box-icon">
              <FaCalendarCheck size={40} className="software-icon-code-block" />
            </div>
            <p>Ensuring smooth connectivity across platforms. 
            </p>
          </motion.div>
          <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:3.5,ease:'easeOut'}} className="software-box-5">
            <div className="software-box-icon">
              <SlGraph size={40} className="software-icon-code-block" />
            </div>
            <p>
            We adhere to industry standards to protect your data
            </p>
          </motion.div>
          <motion.div  initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:4.0,ease:'easeOut'}} className="software-box-6">
            <div className="software-box-icon">
              <MdOutlineSecurity size={40} className="software-icon-code-block" />
            </div>
            <p>
            Regular updates and improvements for long-term performance.
            </p>
          </motion.div>
        </div>
        <img className="software-webbg-2" src={webbg} alt="image" />
      </div>
      <div className="software-professional">
        <h1>Why  Software Development is Essential for Your Business </h1>
        <motion.div  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}}  className="software-professinal-boxes">
          <div className="software-professional-box-one">
            <SiAdguard size={40} className="software-icon-code-block" />

            <div className="software-professional-content">
              <h2>Why Custom Software Development is Essential for Your Business </h2>
              <ul>
                <li>
                Reduce manual workload and improve productivity.
                </li>
                <li>
                Optimize workflows for faster operations.
                </li>
              </ul>
            </div>
          </div>
          <div className="software-professional-box-two">
            <IoPeopleSharp size={40} className="software-icon-code-block" />
            <div className="software-professional-content">
              <h2> Improves User Experience & Engagement </h2>
              <ul>
                <li>
                Create intuitive and engaging digital experiences.

                </li>
                <li>
                Ensure seamless interactions across web, mobile, and desktop.
                </li>
                <li>
                Build future-proof applications with high security.
                </li>
              </ul>
            </div>
          </div>
          <div className="software-professional-box-three">
            <FaMoneyBillTrendUp size={40} className="software-icon-code-block" />{" "}
            <div className="software-professional-content">
              <h2>Business Growth & Competitive Edge </h2>
              <ul>
                <li>
                No limitations of off-the-shelf software.
                </li>
                <li>
                Develop applications tailored for global scalability.
                </li>
                <li>
                Stay ahead with evolving technology trends.


                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="software-faq_container">
        <h4 className="software-faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <SoftwareFaq/>
      </div>
      <motion.div nital={{scale:0}} whileInView={{scale:1.05}} transition={{duration:1.5,ease:'easeOut'}} className="software-service-contact">
        <div className="software-service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="software-service-contact-content">
          <h1>Empower Your Business with a Custom Software App </h1>
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
