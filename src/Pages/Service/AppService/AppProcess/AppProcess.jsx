import React, { useRef, useEffect,useState } from "react";
import { motion } from "framer-motion";
import "../AppProcess/AppProcess.css";

const cards = [
  { id: 1, text: "1. Understanding Your Business Needs", para: "Before development begins, we analyze your business requirements, target users, and competitors. This helps us create an app strategy that aligns with your brand’s goals, ensuring a user-friendly and market-ready application." },
  { id: 2, text: "2. Planning & Prototyping", para: "Once we define the objectives, we move to the planning and prototyping stage. This includes designing wireframes, user flows, and UI/UX layouts to create an intuitive and engaging app experience. Every feature and screen is mapped out for seamless usability." },
  { id: 3, text: "3. UI/UX Design & App Development", para: "With a well-structured plan, our expert designers and developers bring your app vision to life. We focus on crafting a visually appealing interface while ensuring robust backend functionality." },
  { id: 4, text: "4. Testing & Optimization", para: "We conduct extensive testing to ensure your app works flawlessly across devices and platforms. Our testing process includes performance optimization, security checks, and debugging to deliver a high-quality product." },
];

export default function CardSlider() {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;
  
    const scrollSpeed = 2; // Adjust speed here
  
    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // Instantly restart from beginning
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      handleScroll();
    }, 50); // Adjust interval for smoothness
  
    return () => clearInterval(interval);
  }, []);
  
 
   const handleScroll = () => {
     if (containerRef.current) {
       const scrollLeft = containerRef.current.scrollLeft;
       const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
       setScrollX((scrollLeft / maxScroll) * 100);
     }
   };

  return (
    <div className="container-slider">
       <div className="progress-bar-wrapper-slider">
        <div className="progress-bar-slider" style={{ width: `${scrollX}%` }}></div>
      </div>
      <div className="cards-wrapper-slider" ref={containerRef}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card-slider"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="app-card-slider-heading">{card.text}</h2>
            <p className="app-card-slider-text">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
