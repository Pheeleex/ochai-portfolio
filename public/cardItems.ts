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
        category: 'Ecommerce, 3D & AR',  // Use an array
        url: 'https://modern-estore.vercel.app',
         description: `We all love personalised products, even your customers,
         check out this 3D tshirt customiser and see how much your product needs one.
         A great use case of AR/AI technology with Artificial Inelligence`
    },
    {
        id: '2mr',
        title: 'Skye clinic',
        image: '/skye.png',
        category: 'CRM/Business Operations',
        url: 'https://skye-nine.vercel.app/',
         description: `Let computers do what they do best and let humans do what they do best, a great use case for our 
         CRM/business operation tools to help clinic automate administrative tasks, create a better user experience for patients,
         and ease communication with their patients`
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
        url: 'https://real-estate-app-umber-zeta.vercel.app/',
        description: `This web application converts 90% of prospective clients and 
         simplify the listing process for real estate and property companies.`
    },
    {     
            id: '3gt',
            title: 'Apple Clone website',
            image: '/Appleclone.png',
            category:  '3D & AR',
            url: 'https://i-phone-clone-oyster.vercel.app/',
            description: `A mix of great advertising, aesthetics and functionality, 
            cloning the landing showcases my skills in; turning designs to code, paying attention to advertising and SEO key words, 
            paying attention to brand placement and brand identity.`
    },
    {     
        id: 'skumb0n1m',
        title: 'Daytona Rentals',
        image: '/carbooking(1).png',
        category: 'CRM/Business Operations',
        url: 'https://oyster-rentals.vercel.app/',
        description: `Car leasing, rentals and booking from a diverse vehicle inventory, with full specifications
        of each car.`
}
]

export default cardItems