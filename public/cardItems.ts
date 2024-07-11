import React from 'react'


interface CardItem{
    id: string,
    title: string,
    image: string,
    category: string
    url: string
    description: string
}



const cardItems: CardItem[] =[
    {
        id: '1ws',
        title: '3D Shirt customiser',
        image: '/OysterSteeze.png',
        category: 'Ecommerce' && '3D & AR',
        url: 'https://modern-estore.vercel.app',
         description: `We all love personalised products, even your customers,
         check out this 3D tshirt customiser and see how much your product needs one`
    },
    {
        id: 'https://oyster-tracker.vercel.app/',
        title: 'Budget Planner and Expense Tracker',
        image: '/moneytrack.png',
        category: 'Fintech',
        url: 'https://oyster-tracker.vercel.app/',
        description: `Developed a CRUD finance web app to help users track spending, 
        set savings goals, and manage budgets effectively. Utilized ReactJS for a seamless 
        UI and Firebase for real-time data storage and authentication.`
    },
    {
        id: '9ub',
        title: 'Property App',
        image: '/OysterEstate.png',
        category: 'Real Estate',
        url: 'https://ochai-portfolio.vercel.app/',
        description: `This web application converts 90% of prospective clients and 
         simplify the listing process for real estate and property companies.`
    },
    {     
            id: '3gt',
            title: 'Apple Clone website',
            image: '/Appleclone.png',
            category: 'Ecommerce' && '3D & AR',
            url: 'https://i-phone-clone-oyster.vercel.app/',
            description: `A mix of great advertising, aesthetics and functionality, 
            cloning the landing showcases my skills in; turning designs to code, paying attention to advertising and SEO key words, 
            paying attention to brand placement and brand identity.`
    }
]

export default cardItems