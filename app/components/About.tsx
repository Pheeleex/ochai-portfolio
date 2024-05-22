import React from 'react'
import ResponsiveCanvas from './Canvas/ComputerCanvas'
import TechStack from './TechStack'

const About = () => {
  const stacks = ['Vuejs', 'Nextjs', 'Reactjs', 'Typescript']
  return (
    <div className='w-full h-full mt-32 bg'>
         <div className='about-flex justify-between items-center gap-28 '>
                <div className='computer w-full'>
                  <div className='canvas sm:hidden md:hidden lg:block'>
                      <ResponsiveCanvas/>
                  </div>
                  <h1 className='text-gradient_purple-blue'>
                  My primary goals when developing a website for clients are  problem-solving, 
                  revenue generation, and delivering an exceptional user experience.
                  </h1>
                </div>
            <div className='flex flex-col gap-8'>
                 <div className='about-card'>
                    <h1 className='text-gradient_purple-blue text-center text-2xl md:text-3xl lg:text-4xl '>
                        Flexible in communicating across different time zones
                    </h1>
                 </div>
                 <div className='about-card'>
                    <h1 className='text-gradient_purple-blue text-center text-2xl md:text-2.5xl break-normal'>
                    I'm always learning new technologies to stay at the forefront of web development.
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
         <TechStack />
    </div>
  )
}

export default About