import React from 'react'
import ban from './banner.jpg'


export default function Header() {
    return (
        <div className="-mt-80 p-4 md:-mt-64 bg-white md:w-4/5 md:mx-auto md:p-4">
            <div className="flex md:w-2/3 md:block md:flex justify-between">
                <div className="hidden md:block">
                    <span className="mr-4 border-r-2 p-2 cursor-pointer">Home</span>
                    <span className="mr-4 border-r-2 p-2 cursor-pointer">About</span>
                    <span className="mr-4 border-r-2 p-2 cursor-pointer">Services</span>
                    <span className="mr-4 border-r-2 p-2 cursor-pointer">Contact</span>
                    <span className="mr-4 p-2 cursor-pointer">Gallery</span>
                </div>
                
                <div className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

            </div>
        </div>
    )
}
