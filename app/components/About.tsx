import React from 'react'
import ResponsiveCanvas from './Canvas/ComputerCanvas'
import TechStack from './TechStack'

const About = () => {
  const stacks = ['Vuejs', 'Nextjs', 'Threejs', 'Typescript']
  return (
    <div className='w-full h-full  mt-44 md:mt-48 lg:mt-52 bg'>
         <div className='about-flex justify-between gap-24'>
                <div className='computer w-full'>
                  <div className='canvas sm:hidden md:hidden lg:block'>
                      <ResponsiveCanvas/>
                  </div>
                 <div className='w-3/4'>
                 <h2 className='text-gradient_purple-blue text-center sm:text-xl md:text-4xl font-bold'>
                      Welcome to OysterVerse
                  </h2>
                 </div>
                </div>
            <div className='flex flex-col md:flex-row gap-8'>
                 <div className='flex flex-col  gap-12'>
                 <div className='about-card flex flex-col'>
                    <h1 className='text-gradient_purple-blue text-center text-2xl md:text-3xl lg:text-3xl '>
                        Flexible in communicating across different time zones
                    </h1>
                 </div>
                 <div className="about-card">
                      <h1 className='text-gradient_purple-blue text-center text-2xl md:text-3xl lg:text-3xl '>
                        Aesthetically pleasing yet functional web designs
                      </h1>
                  </div>
                 </div>
                 <div className='about-card stack-card'>
                    <h1 className='text-gradient_purple-blue text-center text-xl md:text-2xl break-normal'>
                    I'm always learning new technologies to stay at the forefront of web development.
                    </h1>
                    <div className='stack flex flex-wrap gap-4'>
                        {
                          stacks.map((stack) => (
                            <div className='bg-blue-200 opacity-75 p-2 rounded-md text-blue-800 '>
                              {stack}
                            </div>
                          ))
                        }
                    </div>
                 </div>
            </div>
            <div className="about-card">
                  <h1 className='text-gradient_purple-blue text-center text-xl md:text-2xl lg:text-2xl break-normal'>
                  My primary goals when developing a website for clients are problem-solving, 
                  revenue generation, and delivering an exceptional user experience.
                  </h1>
            </div>
         </div>
         <TechStack />
    </div>
  )
}

export default About