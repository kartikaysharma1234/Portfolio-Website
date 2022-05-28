import React from 'react';
import react from '../assets/icons/react.svg';
import python from '../assets/icons/python.svg'


import Bar from './Bar';
import { motion } from 'framer-motion';

const languages = [
    {
        icon: react,
        name: 'NodeJs',
        level: '50'
    },
    {
        icon: react,
        name: 'React',
        level: '72'
    },
    {
        icon: react,
        name: 'JavaScript',
        level: '75'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '60'
    },
    {
        icon: react,
        name: 'SQL',
        level: '90'
    },


]

const tools = [
    {
        icon: react,
        name: 'VsCode',
        level: '87'
    },
    {
        icon: react,
        name: 'Mysql',
        level: '80'
    },

    
]

const Resume = () => {
    const resume_variant= {
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
        <motion.div className="container resume"
               variants={resume_variant}
               initial="hidden"
               animate="visible"
               exit="exit"
               >
             <div className="row">
                <div className="col-lg-6 resume-card">
                  <h4 className="resume-card__heading">
                      Education
                  </h4>
                  <div className="resume-card__body">
                      <h5 className="resume-card__title">
                          Computer Science Engineering
                      </h5>
                      <p className="resume-card__name">
                          Rajkiya Engineering College, Sonbhadra
                      </p>
                      <p className="resume-card__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid quisquam error mollitia distinctio!</p>
                  </div>
                </div>
                <div className="col-lg-6 resume-card">
                  <h4 className="resume-card__heading">
                      Experience
                  </h4>
                  <div className="resume-card__body">
                      <h5 className="resume-card__title">
                          Fresher and Freelancer
                      </h5>
                      <p className="resume-card__name">
                      Freelancer and Ready To work on Building Projects
                      </p>
                      <p className="resume-card__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid quisquam error mollitia distinctio!</p>
                  </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(Language =>
                                <Bar value={Language}/> 
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools and Software
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool}/>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume;
