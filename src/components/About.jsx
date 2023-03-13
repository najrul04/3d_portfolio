import { motion } from "framer-motion";
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {

    const ServiceCard = ({ index, title, icon }) => (
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img
                src={icon}
                alt='React Developer'
                className='w-16 h-16 object-contain'
              />
      
              <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      );
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center uppercase`}>About Me</p>
            <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
        </motion.div>

        <div className="flex justify-center text-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl loading-[30px] "
        >
        I'm an experienced React developer with a strong foundation in JavaScript, ReactJS, Redux, NextJS, and TailwindCSS. I possess excellent adaptability and can work efficiently in both team and independent work environment, with a strong drive to continuously learn and master emerging technologies.
        </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap justify-center gap-10'>
            {services.map((service, index) => (
                    <ServiceCard key={service.title} index= {index} {...service}/>
                ))}

        </div>

        </>
    );
};

export default SectionWrapper(About, "about");