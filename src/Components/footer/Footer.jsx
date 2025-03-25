import React from "react";
import "../footer/Footer.css";
import logo from '../../assets/footer-logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
 
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-logo">
            <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-links">
            <div className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-subscribe">
            <h3>Stay Ahead in Tech!</h3>
            <p>Subscribe for Exclusive Insights & Updates.</p>
            <div className="subscribe-box">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
            <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaSquareTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaSquareInstagram /></a>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p>© 2025 Sanjit Tech Solutions. All Rights Reserved.</p>
    </div>
</footer>
  );
};
 
export default Footer;