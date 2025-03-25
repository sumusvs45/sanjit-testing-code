import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import '../Components/Navbar.css';
import { MdMenu } from "react-icons/md";
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);  // Menu toggle state
    const [servicesOpen, setServicesOpen] = useState(false); // Services dropdown state

    const toggleMenu = () => {
        setOpen(!open);  // Toggle mobile menu
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);  // Toggle services dropdown
    };

    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className="nav-left">
                        <motion.img 
                            initial={{ opacity: 0, y: -100 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }} 
                            src={logo} 
                            alt="logo" 
                            className='logo' 
                        />
                    </div>

                    <UpdateFollower mouseOptions={{
                        backgroundColor: 'red',
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference"
                    }}>
                        <div className="nav-right">
                            <ul className={`nav-links ${open ? 'show' : ''}`}>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="about-us"> <li>About us</li></Link>
                                <li onClick={toggleServices} className="services-menu">
                                    Services
                                    {/* Submenu for Services */}
                                    {servicesOpen && (
                                        <ul className="submenu">
                                           <Link to="/web"><li>Web Development</li></Link> 
                                            <Link to="/app"><li>App Development</li></Link>
                                            <Link to="/ai"><li>Artificial Intelligence</li></Link>
                                            <Link to="datascience"><li>Data Science</li></Link>
                                            <Link to="/digital"><li>SEO & Digital</li></Link>
                                        </ul>
                                    )}
                                </li>
                                <Link to="/contact-us"> <li>Contact us</li></Link>
                            </ul>

                            {/* Mobile Menu Icon */}
                            <motion.div 
                                initial={{ opacity: 0, y: -100 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }} 
                                className="icon" 
                                onClick={toggleMenu}
                            >
                                <MdMenu />
                            </motion.div>
                        </div>
                    </UpdateFollower>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
