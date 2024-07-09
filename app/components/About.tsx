import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ResponsiveCanvas from './Canvas/ComputerCanvas';
import TechStack from './TechStack';

const About = () => {
  const stacks = ['Vuejs', 'Nextjs', 'Threejs', 'Typescript'];

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true }); // Start with timeline paused

    tl.fromTo(card1Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' })
      .fromTo(card2Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 })
      .fromTo(card3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.4 })
      .fromTo(card4Ref.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 });

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.play(); // Play the timeline animation when the element is in view
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, options);

    // Observe each card reference
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);
    if (card4Ref.current) observer.observe(card4Ref.current);

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='about-section w-full h-full mt-44 md:mt-48 lg:mt-52 bg'>
      <div className='about-flex justify-between gap-24'>
        <div className='computer w-full'>
          <div className='canvas'>
            <ResponsiveCanvas />
          </div>
          <div className='w-3/4'>
            <h2 className='text-gradient_purple-blue text-center sm:text-xl md:text-4xl font-bold'>
              Welcome to OysterVerse
            </h2>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          <div className='flex flex-col gap-12'>
            <div className='about-card flex flex-col' ref={card1Ref}>
              <h1 className='text-gradient_purple-blue text-center text-2xl md:text-3xl lg:text-3xl'>
                Flexible in communicating across different time zones
              </h1>
            </div>
            <div className="about-card" ref={card2Ref}>
              <h1 className='text-gradient_purple-blue text-center text-2xl md:text-3xl lg:text-3xl'>
                Aesthetically pleasing yet functional web designs
              </h1>
            </div>
          </div>
          <div className='about-card stack-card' ref={card3Ref}>
            <h1 className='text-gradient_purple-blue text-center text-xl md:text-2xl break-normal'>
              I'm always learning new technologies to stay at the forefront of web development.
            </h1>
            <div className='stack flex flex-wrap gap-4'>
              {stacks.map((stack) => (
                <div key={stack} className='bg-blue-200 opacity-75 p-2 rounded-md text-blue-800'>
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-card" ref={card4Ref}>
          <h1 className='text-gradient_purple-blue text-center text-xl md:text-2xl lg:text-2xl break-normal'>
            My primary goals when developing a website for clients are problem-solving, 
            revenue generation, and delivering an exceptional user experience.
          </h1>
        </div>
      </div>
      <TechStack />
    </div>
  );
}

export default About;
