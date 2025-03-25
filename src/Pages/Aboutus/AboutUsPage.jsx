import React from "react";
import home from "../../assets/home.webp";
import about from "../../assets/About.webp";
import ourstory from "../../assets/ourstory.webp";
import "../Aboutus/AboutUsPage.css";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  // Left to Right Animation (Slower)

  const content = [
    {
      title: "Mobile App Development",
      subText:
        "We build high-performance mobile apps for Android, iOS, and cross-platform, ensuring scalability, security, and seamless user experience.",
    },
    {
      title: "Website Development",
      subText:
        "We create fast, responsive, and SEO-optimized websites, from corporate sites to e-commerce platforms, enhancing your online presence.",
    },
    {
      title: "AI Solutions",
      subText:
        "We integrate AI for automation, predictive analytics, and personalized experiences, optimizing business operations and decision-making.",
    },
  ];

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeInOut" }, // Slower animation
    },
  };

  // Right to Left Animation (Slower)
  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 120 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeInOut" }, // Slower animation
    },
  };

  // Smooth Rotating Circle Animation
  const rotatingCircleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: { duration: 5, ease: "linear", repeat: Infinity }, // Slower rotation
    },
  };

  return (
    <div className="aboutus-Herosection">
      {/* Hero Section */}
      <img className="aboutus-Hero" src={home} alt="Home" />
      <div className="aboutus">
        <h1>About Us</h1>
        <p>We create digital solutions that drive success and growth.</p>
      </div>

      {/* About Section */}
      <div className="aboutus-content">
        <motion.div
          className="aboutus-content-matter"
          variants={leftToRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1>About Sanjit Tech</h1>
          <p>
          Innovate, Grow & Succeed in the Digital World

At Sanjit Tech Solutions, we build high-performance websites, mobile apps, SEO strategies, and AI-driven solutions to help businesses reach more customers and scale faster. Whether on mobile or desktop, our digital expertise keeps you ahead of the competition.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-content-img"
          variants={rightToLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={about} alt="About Us" />
        </motion.div>
      </div>

      {/* Mission, Vision, Goals */}
      <div className="aboutus-mission">
        <h1>Our Mission, Vision, and Goals</h1>
        <div className="aboutus-boxes">
          <motion.div
            className="aboutus-box"
            variants={leftToRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Mission</h2>
            <p>Empowering businesses with innovative technology solutions.</p>
          </motion.div>

          <motion.div
            className="aboutus-box"
            variants={rightToLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Vision</h2>
            <p>
              To be the leading provider of digital transformation services.
            </p>
          </motion.div>

          <motion.div
            className="aboutus-box"
            variants={leftToRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Goals</h2>
            <p>Innovate, collaborate, and grow businesses worldwide.</p>
          </motion.div>
        </div>
      </div>

      {/* Latest Stories */}
      <h1 className="aboutus-story-1">Our Latest Stories</h1>
      <div className="aboutus-Stories">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="aboutus-box1"
            variants={
              index % 2 === 0 ? rightToLeftVariants : leftToRightVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p>
              January 2025 - {index === 0 ? "App" : index === 1 ? "Web" : "AI"}{" "}
              Development
            </p>
            <h3>{item.title}</h3>
            <p>{item.subText}</p>
          </motion.div>
        ))}
      </div>

      {/* Teamwork Section */}
      <h1 className="aboutus-story">Our Team Work</h1>
      <div className="aboutus-ourstory">
        <motion.div
          className="aboutus-ourstory-img"
          variants={leftToRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={ourstory} alt="Our Story" />
        </motion.div>
        <motion.div
          className="aboutus-ourstory-content"
          variants={rightToLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            At Sanjit Tech Solutions, we firmly believe that true success is
            achieved through collaboration, innovation, and teamwork. Our
            strength lies in our diverse team of skilled professionals,
            including developers, designers, project managers, and strategists,
            who bring unique expertise and perspectives to the table. We foster
            a culture of continuous learning and knowledge-sharing, ensuring
            that each project benefits from the latest technological
            advancements and creative solutions. By working together seamlessly,
            we transform challenges into opportunities, crafting scalable,
            high-performance digital solutions that drive business growth. Our
            approach is not just about delivering results but also about
            building long-term partnerships with our clients. We listen, adapt,
            and innovate—ensuring that every solution we create is tailored to
            meet specific business needs, industry demands, and future
            scalability. At Sanjit Tech Solutions, teamwork is more than just a
            principle—it’s the foundation of our success.
          </p>
        </motion.div>
      </div>

      {/* Rotating Circles */}
      <motion.div
        className="rotating-circle"
        variants={rotatingCircleVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default AboutUsPage;
