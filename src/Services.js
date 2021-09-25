import React from 'react'
import SingleService from './SingleService'
import ban from './NotebookNapoleonNecklace.jpg'
import dr from './dr.jpg'

import jr from './jrepair.jpg'


export default function Services() {
    return (
        <div className="md:flex justify-between bg-white md:w-4/5 md:mx-auto md:p-4 md:flex justify-content">
            <SingleService 
                image={ban} 
                heading={`Custom Jewelry Making`} 
                content={`Our design team can work with you to create an item from scratch, or rework an existing item you no longer wear.`}/>
            <SingleService image={dr} 
                heading={`Design a Ring`} 
                content={`Finding the perfect ring, and the ideal diamond to match, is simple with our specialists.`}/>
            <SingleService image={jr} 
                heading={`Jewelry Repair`} 
                content={`Our Goldsmiths can size your ring, fix your broken chain, restring pearls, or engrave an item to personalize it.`}/>
        </div>
    )
}
