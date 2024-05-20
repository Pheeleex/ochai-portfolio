'use client'
import Filters from '@/app/components/Filters'
import Header from '@/app/components/Header'
import ResourceCard from '@/app/components/ResourceCard'
import SearchForm from '@/app/components/SearchForm'
import React, { useState } from 'react'
import cardItems from '@/public/cardItems'

const Home = () => {
  const [activeLink, setActiveLink] = useState('')

  const filteredCardItems = activeLink === 'all' ? cardItems : 
  cardItems.filter((item) => item.category.toLowerCase().includes(activeLink.toLowerCase()))

  const displayCategory = activeLink === 'all' ? 'All Projects' : activeLink;

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover 
        bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">JavaScript Mastery Resources</h1>
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
        <div className="mt-12 flex w-full flex-wrap justify-center
         gap-16 sm:justify-start">
           
             { activeLink && filteredCardItems.length > 0 ? (
             
              filteredCardItems.map((items) => (
                <ResourceCard
                      key={items.id}
                      id={items.id}
                      title={items.title}
                      image={items.image}
                      url={items.url}
                />
              ))
             ) :(
              <p className="body-regular text-white-400">
              No resources found
            </p>
             )
            }
        </div>
      </section>
    </main>
  )
}

export default Home