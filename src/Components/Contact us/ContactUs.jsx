import React from "react";
import { motion } from "framer-motion";
import "../Contact us/ContactUs.css";

const ContactUs = () => {
  return (
    <motion.div
      className="contactUs-box"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow zoom-in effect
    >
      <div className="contactUs-card">
        <h3>Let’s Build Something Great Together!</h3>
        <p>
          Partner with Sanjit Tech Solutions and experience innovation that
          drives success. From cutting-edge web & app development to
          AI-powered solutions, we help businesses thrive in the digital era.
        </p>
        <p className="para">
          Let’s discuss your project today & turn your vision into reality!
        </p>
      </div>

      <motion.div
        className="contactUs-btn"
        whileHover={{ scale: 1.1 }} // Button hover effect
        transition={{ duration: 0.3 }}
      >
        Get In Touch
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
