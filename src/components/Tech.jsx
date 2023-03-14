import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
const Tech = () => {
  
 useEffect(() => {
  AOS.init({
    duration: 1500,
  });
}, [])

  return (
   <div data-aos="fade-up" whilehover={{scale:1.1}} >
    <div  data-aos="fade-up" whilehover={{scale:1.1}} variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-center`}>
      Tech I have Learned
    </p>
    <h2 className={`${styles.sectionHeadText} text-center`}>
      Skills
    </h2>
  </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      

      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
   </div>
  );
};

export default SectionWrapper(Tech, "tech");