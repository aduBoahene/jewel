import React from 'react'


export default function SingleService({heading, content,image}) {
    return (
        <div className="w-full p-2 md:w-1/4 border-2 border-gray-200">
            <img src={image} alt=""/>
            <span className="text-center font-bold">{heading}</span>
            <p className="mb-3">
                {content}
            </p>

            <span className="bg-gray-200 p-2 hover:bg-gray-300">Read More</span>
        </div>
    )
}
