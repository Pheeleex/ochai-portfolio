import React from 'react'
import About from './About'

const Intro = () => {
  return (
    <div className='intro mt-40 flex flex-col items-center gap-6 pt-4'>
            <span className='text-[15px] md:2xl text-white break-normal'>
                Let's create fun experiences together</span>
        <h1 className='text-center text-[30px] md:text-5xl lg:text-6xl mb-4 break-normal 
        text-white-800'> Transform your Ideas into <br /> profit making realities
        </h1>
        <div>
        <p className='text-center text-[30px] md:text-4xl lg:text-5xl mb-4 font-bold text-white'> Hi, I'm
            <span className=' text-gradient_purple-blue'>
             Felix</span>
        </p>      
        <p className='text-center text-2xl text-white break-normal'>
             I am a web developer based in Nigeria. <br />
             Open to work remotely with clients all over the world</p>
    </div>
    </div>
  )
}

export default Intro