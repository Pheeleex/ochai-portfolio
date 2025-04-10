'use client'
import Filters from '@/app/components/Filters'
import Header from '@/app/components/Header'
import ResourceCard from '@/app/components/ResourceCard'
import SearchForm from '@/app/components/SearchForm'
import React, { Suspense, useState } from 'react'
import cardItems from '@/public/cardItems'
import Intro from '@/app/components/Intro'
import About from '@/app/components/About'
import StepCards from '@/app/components/Steps'
import Contact from '@/app/components/Contact'

const Home = () => {
  const [activeLink, setActiveLink] = useState('all')

  const filteredCardItems = activeLink === 'all' ? cardItems :
    cardItems.filter((item) => item.category.toLowerCase().includes(activeLink.toLowerCase()))

  const displayCategory = activeLink === 'all' ? 'All Projects' : activeLink;

  return (
    <Suspense fallback={<div className='h-[60%] text-[20rem]'>Loading filters...</div>}>
      <main className="flex-center paddings w-full max-w-screen-2xl flex-col">
        <section className="nav-padding w-full" id="Intro">
          <Intro />
        </section>

        <section className="nav-padding w-full" id="About">
          <About />
        </section>
        <section className="nav-padding w-full" id="RecentProjects">
          <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover 
        bg-center text-center mt-8">
            <h1 className="sm:heading1 heading2 mb-6 text-center text-white">Recent Projects</h1>
          </div>
          <SearchForm />
        </section>
        <Filters
          activeLink={activeLink}
          onFilterChange={setActiveLink} />
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            category={displayCategory}
          />
          <div className="card-container w-full">
          <div className="flex justify-between items-center flex-wrap">
            {activeLink && filteredCardItems.length > 0 ? (
              filteredCardItems.map((item) => (
                  <ResourceCard
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    url={item.url}
                    description={item.description}
                  />
              ))
            ) : (
              <p className="body-regular text-white-400">
                No resources found
              </p>
            )}
          </div>
          </div>

          <section className="nav-padding w-full" id="Approach">
            <StepCards />
          </section>
        </section>
        <Contact />
      </main>
    </Suspense>
  )
}

export default Home