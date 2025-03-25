import React from 'react';
import '../Hero/Hero.css'
import {motion} from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower';
const Hero = () => {
    return (
        <>
        <UpdateFollower mouseOptions={{
            backgroundColor:'white',
            zIndex:999,
            followSpeed:1.5,
            scale:5,
            mixBlendMode:'exclusion'
        }}>
        <div className="hero-section">
         <motion.h2 initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness:100,damping:10,delay:0.8}}className='hero-heading'>Smart Solutions For a  <br></br> <span>Digital Solutions</span></motion.h2> 
         <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:100,damping:10,delay:0.8}}className="big-circle">
         </motion.div> 
         <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:100,damping:10,delay:0.8}} className="sm-circle">
         </motion.div>
         <div className="half-eclipse-ring">

         </div>
         <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:100,damping:10,delay:0.8}} className="md-eclipse">
            
         </motion.div>
         <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:100,damping:10,delay:0.8}} className="md-circle">
         </motion.div>
         <div className="semi-circle">
         </div>
         </div>

        </UpdateFollower>
           
        </>
    );
};

export default Hero;