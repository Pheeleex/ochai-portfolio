import React, { useState } from 'react'

interface FiltersProps{
  activeLink: string,
  onFilterChange: (filter:string) => void
}

const Filters: React.FC<FiltersProps> = ({activeLink, onFilterChange}) => {
    const links = ['all','Real estate', 'Ecommerce', 'FinTech', '3D & AR', 'other'] 

    const handleFilter = (link: string) => {
        if(activeLink === link){
            onFilterChange('')
        }
        else{
            onFilterChange(link)
        }
    }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto 
      py-12 sm:max-w-2xl">
    {links.map((link) => (
      <button
        key={link}
        onClick={() => handleFilter(link)}
        className={`${
          activeLink === link ?"gradient_blue-purple" : ""
        } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
      >
        {link}
      </button>
    ))}
  </ul>
  )
}

export default Filters