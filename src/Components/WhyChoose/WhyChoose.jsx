import React from "react";
import "../WhyChoose/WhyChoose.css";
import { motion } from "framer-motion";

const WhyChoose = () => {
  // Moving Up & Down Animation for Circles
  const movingCircleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: [-20, 20, -20], // Moves up and down
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity }, // Continuous movement
    },
  };

  return (
    <>
      <div className="div">
        {/* Header */}
        <div className="whyChoose-header">
          <div className="chooseUs-border"></div>
          <h2>Why Sanjit Tech?</h2>
        </div>

        <div className="card-box">
          {/* Moving Circles */}
          <motion.div
            className="md-circleLeft"
            variants={movingCircleVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="md-circleRight"
            variants={movingCircleVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Left Card Animation - Fixed! */}
          <motion.div
            className="card-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120, // Increased for better bounce
              damping: 10, // Reduced damping for a livelier effect
              delay: 0.3,
              duration: 1.2,
            }}
            viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers correctly
          >
            <h2>What makes Sanjit Tech different?</h2>
            <p>
              Our expert team ensures innovative, high-performance solutions
              tailored to your business growth, leveraging the latest technology
              to drive efficiency and success.
            </p>
          </motion.div>

          {/* Right Card Animation */}
          <motion.div
            className="card-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: 0.5,
              duration: 1.2,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>Why Choose Sanjit Tech?</h2>
            <p>
              We deliver cutting-edge, scalable web solutions designed to
              enhance user experience, boost performance, and accelerate your
              digital transformation with precision and expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
