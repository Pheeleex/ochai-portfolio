import Image from 'next/image'
import React from 'react'
import './scroll.css'
import {Css, HTMl,Taiwind, Threejs, Typescript,
  Javascript, Docker, ReactJS, Node,
  Figma, Git, MongoDB
} from './imageLayout'

const TechStack = () => {
  const TechStack = [Css, HTMl, Taiwind, Javascript, ReactJS, Figma, Git,
    Node, Typescript, Docker, Threejs, MongoDB
  ]
  return (
    <div className='auto-scroll mt-32 mx-4'>
      <div className="auto-scroll-content">
      {
        TechStack.map((stack) => (
              <Image 
                alt='stack'
                src={stack}
                height={100}
                width={100}
                className='stack'
                />
        ))
      }
      {
        TechStack.map((stack) => (
              <Image 
                alt='stack'
                src={stack}
                className='stack'
                />
        ))
      }
      </div>
      
    </div>
  )
}

export default TechStack