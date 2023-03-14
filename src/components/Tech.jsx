import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
   <>
    <div variants={textVariant()}>
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
   </>
  );
};

export default SectionWrapper(Tech, "tech");