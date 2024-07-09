'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(TextPlugin);

const Intro = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animation for the text "Hi, I'm Felix"
    tl.to('.hi', {
      text: " Felix",
      duration: 1,
      ease: 'none',
      delay: 0.5,
      stagger: 0.5
    })
    .to('.hi', {
      fontSize: '2em',
      duration: 0.5,
      ease: 'power2.out',
    })
    .to('.hi', {
      fontSize: '1em',
      duration: 0.5,
      ease: 'power2.in',
    })
    .to('.hi', {
      onComplete: () => {
        document.querySelector('.hi')?.classList.add('text-gradient_purple-blue');
      },
      duration: 0,
    })
    .to('.dev', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.in'
    });
  }, { scope: container });

  return (
    <div ref={container} className='intro mt-20 flex flex-col items-center gap-6'>
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
