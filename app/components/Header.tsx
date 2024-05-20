import React from 'react'

interface props {
  category: string
}
const Header = ({category}: props) => {
  return (
    <div>
      <h1 className="heading3 self-start text-white-800">{category}</h1>
    </div>
  )
}

export default Header