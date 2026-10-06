'use client'
import React, { Suspense } from 'react'
import Intro from '@/app/components/Intro'
import SelectedWork from '@/app/components/SelectedWork'
import ProductionCaseStudies from '@/app/components/ProductionCaseStudies'
import Capabilities from '@/app/components/Capabilities'
import About from '@/app/components/About'
import StepCards from '@/app/components/Steps'
import Contact from '@/app/components/Contact'

const Home = () => {
  return (
    <Suspense fallback={<div className='h-[60%] text-[20rem]'>Loading...</div>}>
      <main className="page-frame">
        <section className="w-full pt-[98px]" id="Intro">
          <Intro />
        </section>

        <ProductionCaseStudies />

        <SelectedWork />

        <Capabilities />

        <About />

        <StepCards />

        <Contact />
      </main>
    </Suspense>
  )
}

export default Home
