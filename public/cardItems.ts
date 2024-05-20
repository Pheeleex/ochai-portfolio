import React from 'react'


interface CardItem{
    id: string,
    title: string,
    image: string,
    category: string
    url: string
}



const cardItems: CardItem[] =[
    {
        id: '1ws',
        title: '3D Shirt customiser',
        image: '/OysterSteeze.png',
        category: 'Ecommerce' && '3D & AR',
        url: 'https://modern-estore.vercel.app'
    },
    {
        id: 'https://oyster-tracker.vercel.app/',
        title: 'Budget Planner and Expense Tracker',
        image: '/moneytrack.png',
        category: 'Fintech',
        url: 'https://oyster-tracker.vercel.app/'
    },
    {
        id: '9ub',
        title: 'Property App',
        image: '/OysterEstate.png',
        category: 'Real Estate',
        url: 'https://propertyapp-beryl.vercel.app/'
    },
    {     
            id: '3gt',
            title: 'Apple Clone website',
            image: '/Appleclone.png',
            category: 'Ecommerce' && '3D & AR',
            url: 'https://i-phone-clone-oyster.vercel.app/'
    }
]

export default cardItems