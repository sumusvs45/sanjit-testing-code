import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../softwareProcess/softwareProcess.css";

const cards = [
  { id: 1, text: "1. Strategy & Consultation", para: "We analyze your business requirements and craft a custom software strategy that aligns with your goals." },
  { id: 2, text: "2. Custom Software Development", para: "We design and develop scalable, high-performance software applications that cater to your unique business needs." },
  { id: 3, text: "3. UI/UX Design & Prototyping", para: "We craft intuitive and engaging user experiences to maximize usability and customer satisfaction." },
  { id: 4, text: "4. Deployment & Integration", para: "We ensure smooth software deployment with minimal downtime and seamless integration into your existing ecosystem." },
 
];

export default function SoftwareProcess() {
  const [scrollX, setScrollX] = useState(0);
  const contsoftwarenerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContsoftwarener = contsoftwarenerRef.current;
    if (!scrollContsoftwarener) return;

    const scrollSpeed = 2; // Adjust speed here
    const interval = setInterval(() => {
      if (scrollContsoftwarener.scrollLeft < scrollContsoftwarener.scrollWidth - scrollContsoftwarener.clientWidth) {
        scrollContsoftwarener.scrollLeft += scrollSpeed;
      } else {
        scrollContsoftwarener.scrollLeft = 0; // Reset scroll when it reaches the end
      }
      handleScroll();
    }, 50); // Adjust interval for smoothness

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (contsoftwarenerRef.current) {
      const scrollLeft = contsoftwarenerRef.current.scrollLeft;
      const maxScroll = contsoftwarenerRef.current.scrollWidth - contsoftwarenerRef.current.clientWidth;
      setScrollX((scrollLeft / maxScroll) * 100);
    }
  };

  return (
    <div className="software-contsoftwarener-slider">
      <div className="software-progress-bar-wrapper-slider">
        <div className="software-progress-bar-slider" style={{ width: `${scrollX}%` }}></div>
      </div>
      <div className="software-cards-wrapper-slider" ref={contsoftwarenerRef} onScroll={handleScroll}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="software-card-slider"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="software-card-slider-heading">{card.text}</h2>
            <p className="software-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
