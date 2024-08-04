import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const handleAnimationComplete = () => {
    const hiElement = document.querySelector('.hi');
    if (hiElement) {
      hiElement.classList.add('text-gradient_blue-purple');
    }
  };

  return (
    <div className='intro flex flex-col items-center gap-6'>
      <span className='text-[15px] md:2xl text-white break-normal text-center'>
        Let's create fun experiences together
      </span>
      <h1 className='profit text-center text-[30px] md:text-5xl lg:text-6xl mb-4 break-normal text-white-800 opacity-1'>
        Transform your Ideas into <br /> profit making realities
      </h1>
      <div>
        <p className='greet text-center text-[30px] md:text-4xl lg:text-5xl mb-4 font-bold text-white'>
          Hi, I'm&nbsp;
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: [0, 0.6, 1], 
              scale: [0, 1.2, 1]
            }}
            onAnimationComplete={handleAnimationComplete}
            transition={{ duration: 1.5 }}
            className='hi text-white inline-block'>Felix</motion.span>
        </p>
        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
        className='dev text-center text-2xl text-white break-normal'>
          I am a software developer based in Nigeria. <br />
          Open to work remotely with clients all over the world
        </motion.p>
      </div>
    </div>
  );
}

export default Intro;
