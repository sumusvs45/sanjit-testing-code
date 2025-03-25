import React from "react";
import { MdWebAsset } from "react-icons/md";
import { IoPulseOutline } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { Si365Datascience, SiGooglemarketingplatform } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
import "../Services/Services.css";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const servicesData = [
  { id: 1, icon: <MdWebAsset size={"80px"} />, title: "Web Development", description: "Custom,Scalable,and high-performance websites tailored to your business needs." },
  { id: 2, icon: <IoPulseOutline size={"80px"} />, title: "SEO", description: "Boost your Google rankings with expert SEO strategies, local & global optimization, and fast, mobile-friendly websites in Hyderabad, Vizag, Vijayawada & beyond." },
  { id: 3, icon: <FaBrain size={"80px"} />, title: "Artificial Intelligence", description: "AI-powered solutions that enhance automation,effeciency,and innovation." },
  { id: 4, icon: <Si365Datascience size={"80px"} />, title: "Data Science", description: "Transforming raw data into valuable insights for better decision-making." },
  { id: 5, icon: <SiGooglemarketingplatform size={"80px"} />, title: "Digital Marketing", description: "Grow your business with social media marketing, PPC ads, content marketing, and lead generation to maximize reach and conversions." },
  { id: 6, icon: <FaAppStoreIos size={"80px"} />, title: "App Development", description: "Engaging and intuitive mobile applications for both iOS and Android platforms." },
];

const Services = () => {
  // Slow animation for sub-heading and sub-text
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", damping: 15 } },
  };

  // Staggered falling animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Container for cards with stagger effect
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  return (
    <div className="services-section">
      {/* Header animation container */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="services-header"
      >
        {/* UpdateFollower for Sub Heading */}
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 0.3,
            scale: 3,
            mixBlendMode: "exclusion",
          }}
        >
          <motion.h2 variants={itemVariants} className="sub-heading">
            Innovative Digital Solutions
          </motion.h2>
        </UpdateFollower>

        {/* UpdateFollower for Sub Text */}
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 0.8,
            scale: 5,
            rotate: 360,
            mixBlendMode: "exclusion",
          }}
        >
          <motion.p variants={itemVariants} className="sub-text">
            We are development experts <br /> on all <span className="text-highlight">technologies & platforms</span>
          </motion.p>
        </UpdateFollower>
      </motion.div>

      {/* Cards animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="card-container"
      >
        {servicesData.map((service) => (
          <UpdateFollower
            key={service.id}
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 0.5,
              scale: 5,
              rotate: 720,
              mixBlendMode: "exclusion",
              backgroundElement: service.icon,
            }}
          >
            <motion.div variants={cardVariants} className="card">
              {service.icon}
              <div className="border"></div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          </UpdateFollower>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
