import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "../contactUs Page/ContactUsPage.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const ContactUsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="contact">
      <div className="contact_hero">
        <h1>
          Let’s <span>Connect </span>& Collaborate
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
        >
          Partner with Us for Innovative Solutions
        </motion.p>
      </div>
      <div className="getin">
        <p>GET IN TOUCH</p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="box1"
      >
        <motion.div
          className="box-icon"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <FaMapMarkerAlt size={40} />
        </motion.div>
        <h3>Office Location</h3>
        <p>
          unit:307, 3rd floor, APNRT Tech Park, Mangalagiri, Atmakur Rural,
          Andhra Pradesh 522503
        </p>
      </motion.div>
      <motion.div
        className="box2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="box-icon"
        >
          <FaHeadphones size={40} />
        </motion.div>
        <h3>Communication</h3>
        <div className="box2-icons">
          <FaPhoneAlt size={20} />
        </div>
        <div className="box2-no">
          <p>8639620754</p>
        </div>
        <div className="box2-icons">
          <IoMail size={25} />
        </div>
        <div className="box2-mail">
          <p>sanjittechsolutions@outlook.com</p>
        </div>
      </motion.div>
      <motion.div
        className="form-section"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
      >
        <h2>Contact Us</h2>
        <p>
          We’re here to answer your questions, discuss your ideas, and help you
          bring your vision to life. Whether you’re looking for custom
          solutions, technical support, or just want to say hello – we’re just a
          message away
        </p>
      </motion.div>

      <motion.div
        className="contact-container"
        inital={{ scale: 0 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1>Let’s Build Something Great Together</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone no" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Type Your Message" />
          <button className="cta-btn" type="button">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};
export default ContactUsPage;
