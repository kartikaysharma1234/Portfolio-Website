import React from 'react';
import api from '../assets/icons/api.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import { motion } from 'framer-motion';

import Skillcard from './SkillCard';

const skills = [
    {
        icon: api,
        title: "Track 1 ",
        about: "Myself Kartikay Sharma from saharanpur"
    },
    {
        icon: repair,
        title: "Track 2 ",
        about: "Myself Kartikay Sharma from saharanpur"
    },
    {
        icon: api,
        title: "Track 3 ",
        about: "Myself Kartikay Sharma from saharanpur"
    },
    {
        icon: algo,
        title: "Track 4 ",
        about: "Myself Kartikay Sharma from saharanpur"
    },
    {
        icon: computer,
        title: "Track 5 ",
        about: "Myself Kartikay Sharma from saharanpur"
    },
    {
        icon: puzzle,
        title: "Track 6 ",
        about: "Myself Kartikay Sharma from saharanpur"
    }
]

const About = () => {
    const about_variant= {
        hidden : {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay:0.2, duration:0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return(
        
        <motion.div className="about"
               variants={about_variant}
               initial="hidden"
               animate="visible"
               exit="exit"
                >
            <h6 className="about__intro">
                 My Self Kartikay Sharma. Actively Looking for Internship.
            </h6>
            <div className="container about__container">
                 <h6 className="about__heading">What I offer</h6>
                 <div className="row">
                      {
                          skills.map(skill => 

                          <Skillcard skill={skill}/>

                          )
                      }
                 </div>
            </div>
        </motion.div>
    );
};

export default About;