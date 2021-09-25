import React from 'react'

export default function Tab() {
    return (
        <div className="">
            <div className="w-5/6 mx-auto md:w-1/3 mx-auto md:text-2xl">
                <span className="border-2 border-gray-100 hover:bg-gray-100 rounded p-1 cursor-pointer" onClick={()=>alert("featured")}>Featured</span>
                <span className="border-2 border-gray-100 hover:bg-gray-100 p-1 cursor-pointer" onClick={()=>alert("new arrivals")}>New Arrivals</span>
                <span className="border-2 border-gray-100 hover:bg-gray-100 p-1 cursor-pointer" onClick={()=>alert("Onsale")}>OnSale</span>
            </div>
        </div>
    )
}
