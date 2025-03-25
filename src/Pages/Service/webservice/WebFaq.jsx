import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../webservice/WebFaq.css"; // Import CSS file
import {motion} from "framer-motion"

const faqs = [
  {
    question: "What types of mobile apps do you develop? ",
    answer:
      "We develop business websites, eCommerce stores, custom web applications, landing pages, and more",
  },
  {
    question: "Do you provide custom web development or use templates? ",
    answer:
      "We offer both custom-designed websites and template-based solutions, depending on your needs and budget. ",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes, we ensure all websites are responsive, mobile-friendly, and optimized for search engines.",
  },
  {
    question: "Can you redesign my existing website? ",
    answer:
      "Absolutely! We provide website redesign services to improve UI/UX, performance, and SEO.",
  },
  {
    question: "Do you provide website maintenance and support? ",
    answer:
      "Yes, we offer ongoing support, security updates, and performance optimizations after launch.",
  },
];


export default function WebFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="web-faq-container">
      {faqs.map((faq, index) => (
        <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.2, // Staggered delay for rain effect
        }} key={index} className="web-faq-box">
          <button className="web-faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="web-faq-icon" />
            ) : (
              <FiPlus className="web-faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="web-faq-answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
