import React from 'react';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import mightycoder from '../assets/mightycoder.svg';
import resume from '../assets/Resume.pdf';
import { motion } from 'framer-motion';


const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:kartikaysharma99999@gmail.com")
    }
    
    const sidebar_variant= {
        hidden : {
            x : '-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay:0.3, duration:0.5, type:'string'
            }
        }
    }
    return (
         <motion.div className="sidebar"
             variants = {sidebar_variant}
             initial="hidden"
             animate="visible"
         >

             {/* <img src={mightycoder} alt="avatar" className="sidebar__avatar"/> */}
             <div className = "sidebar__name"> Kartikay <span> Sharma </span></div>
             <div className="sidebar__item sidebar__title"> Web Developer </div>
             <a href={resume} download="Resume.pdf">
                <div className="sidebar__item sidebar__resume">
                <img src={tie} alt="resume" className="sidebar__icon"/> Download Resume
                </div>
             </a>
             <figure className="sidebar__social-icons my-2">
                <a href="https://www.instagram.com/kartikaysharma1234"><img src={instagram} alt="instagram" className="sidebar__icon mr-3"/></a>
                <a href="https://www.linkedin.com/in/kartikay-sharma-b87612194/"><img src={linkedin} alt="linkedin" className="sidebar__icon"/></a>
             </figure>
             <div className="sidebar__contact">
                 <div className="sidebar__item sidebar__github">
                       <a href="https://github.com/kartikaysharma1234"><img src={github} alt="github" className="sidebar__icon mr-3"/>Github</a>
                 </div>
                 <div className="sidebar__location">
                     <img src={pin} alt="location" className="sidebar__icon mr-3" ></img>
                     Saharanpur, India
                 </div>
                 <div className="sidebar__item">kartikaysharma99999<br/>@gmail.com</div>
                 <div className="sidebar__item">8445424406</div>
             </div>
             <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
         </motion.div>
    )
}

export default Sidebar;