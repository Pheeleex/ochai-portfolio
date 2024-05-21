import React from 'react'
import ComputersCanvas from './Canvas/ComputerCanvas'

const About = () => {
  const stacks = ['Vuejs', 'Nextjs', 'Reactjs', 'Typescript']
  return (
    <div className='w-full h-full mt-32'>
         <div className='about-flex justify-between items-center gap-48'>
            <ComputersCanvas />
            <div className='flex flex-col gap-8'>
                 <div className='about-card'>
                    <h1 className='text-gradient_purple-blue text-center text-2xl md:text-3xl lg:text-4xl '>
                        I'm flexible with time zone communications
                    </h1>
                 </div>
                 <div className='about-card'>
                    <h1 className='text-gradient_purple-blue text-center text-2xl md:text-2.5xl '>
                        I'm constantly try to improve my tech stack
                    </h1>
                    <div className='stack flex flex-wrap gap-4'>
                        {
                          stacks.map((stack) => (
                            <div className='bg-blue-200 opacity-75 p-4 rounded-md text-blue-800 '>
                              {stack}
                            </div>
                          ))
                        }
                    </div>
                 </div>
            </div>
         </div>
    </div>
  )
}

export default About