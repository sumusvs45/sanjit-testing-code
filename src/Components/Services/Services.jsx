import React, { useState, useEffect } from "react";
import { MdWebAsset } from "react-icons/md";
import { IoPulseOutline } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { Si365Datascience, SiGooglemarketingplatform } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
import "../Services/Services.css";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const servicesData = [
  { id: 1, icon: <MdWebAsset size={"80px"} />, title: "Web Development", description: "Custom, scalable, and high-performance websites tailored to your business needs." },
  { id: 2, icon: <IoPulseOutline size={"80px"} />, title: "SEO", description: "Boost your Google rankings with expert SEO strategies, local & global optimization, and fast, mobile-friendly websites." },
  { id: 3, icon: <FaBrain size={"80px"} />, title: "Artificial Intelligence", description: "AI-powered solutions that enhance automation, efficiency, and innovation." },
  { id: 4, icon: <Si365Datascience size={"80px"} />, title: "Data Science", description: "Transforming raw data into valuable insights for better decision-making." },
  { id: 5, icon: <SiGooglemarketingplatform size={"80px"} />, title: "Digital Marketing", description: "Grow your business with social media marketing, PPC ads, content marketing, and lead generation." },
  { id: 6, icon: <FaAppStoreIos size={"80px"} />, title: "App Development", description: "Engaging and intuitive mobile applications for both iOS and Android platforms." },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if user is on mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state based on the window size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", damping: 15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  return (
    <div className="services-section">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="services-header"
      >
        {/* Apply UpdateFollower only for non-mobile devices */}
        {!isMobile ? (
          <UpdateFollower mouseOptions={{ backgroundColor: "black", zIndex: 999, followSpeed: 0.3, scale: 3, mixBlendMode: "exclusion" }}>
            <h2 className="sub-heading">
              Innovative Digital Solutions
            </h2>
          </UpdateFollower>
        ) : (
          <h2 className="sub-heading">
            Innovative Digital Solutions
          </h2>
        )}

        {/* Sub Text Visibility */}
        {!isMobile ? (
          <UpdateFollower mouseOptions={{ backgroundColor: "black", zIndex: 999, followSpeed: 0.8, scale: 5, rotate: 360, mixBlendMode: "exclusion" }}>
            <p  className="sub-text">
              We are development experts <br /> on all <span className="text-highlight">technologies & platforms</span>
            </p>
          </UpdateFollower>
        ) : (
          <p  className="sub-text">
            We are development experts <br /> on all <span className="text-highlight">technologies & platforms</span>
          </p>
        )}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="card-container"
      >
        {servicesData.map((service) => (
          !isMobile ? (
            <UpdateFollower key={service.id} mouseOptions={{ backgroundColor: "white", zIndex: 999, followSpeed: 0.5, scale: 5, rotate: 720, mixBlendMode: "exclusion", backgroundElement: service.icon }}>
              <motion.div variants={cardVariants} className="card">
                {service.icon}
                <div className="border"></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            </UpdateFollower>
          ) : (
            <motion.div key={service.id} variants={cardVariants} className="card">
              {service.icon}
              <div className="border"></div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          )
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
