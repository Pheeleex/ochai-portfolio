
import React from 'react';


const Intro = () => {
 
   

  return (
    <div className='intro mt-20 flex flex-col items-center gap-6'>
      <span className='text-[15px] md:2xl text-white break-normal text-center'>
        Let's create fun experiences together
      </span>
      <h1 className='profit text-center text-[30px] md:text-5xl lg:text-6xl mb-4 break-normal text-white-800 opacity-1'>
        Transform your Ideas into <br /> profit making realities
      </h1>
      <div>
        <p className='greet text-center text-[30px] md:text-4xl lg:text-5xl mb-4 font-bold text-white'>
          Hi, I'm 
          <span className='hi text-white'></span>
        </p>
        <p className='dev text-center text-2xl text-white break-normal opacity-0'>
          I am a web developer based in Nigeria. <br />
          Open to work remotely with clients all over the world
        </p>
      </div>
    </div>
  );
}

export default Intro;
