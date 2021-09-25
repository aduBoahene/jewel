import React from 'react'


export default function SingleJewel({jewel, sex, category, price}) {
    return (
        <div class="w-full md:w-1/5 flex flex-col justify-center text-center">   
            <div className="text-center content-center md:mx-auto content-center text-center">
                <img src={jewel} className="text-center mx-auto w-52 h-52"/>
                <div className="w-full">
                    <p>{sex}</p>
                    <span>{category}</span>
                    {/* <hr/> */}
                    <p className="font-bold text-2xl">{price}</p>
                </div>
                
            </div>            
        </div>
    )
}
