import React, { useState } from 'react'

const Categories = () => {

    const items = [
        {
            image: "./front-1.jpg",
            title : "Laptop"
        },
        {
            image: "./front-2.jpg",
            title : "Gaming Laptop"
        },
        {
            image: "./front-3.jpg",
            title : "Simple Laptop"
        },
        {
            image: "./front-4.jpg",
            title : "Affordable Laptop"
        },
        {
            image: "./front-1.jpg",
            title : "Laptop"
        },
        {
            image: "./front-2.jpg",
            title : "Gaming Laptop"
        },
        {
            image: "./front-3.jpg",
            title : "Simple Laptop"
        },
        {
            image: "./front-4.jpg",
            title : "Affordable Laptop"
        },
    ]


  return (
    <>
        
            <div id='categories'>
                <p className='font-semibold text-center text-2xl sm:text-3xl md:text-4xl pt-3 font-roboto'>15+ Homepages</p>
                <p className=' text-lg md:text-xl text-center pt-3 font-roboto'>Lezada React template is an apparently simple but highly functional template designed for creating a flourishing online business.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:space-x-2 md:grid-cols-4 md:space-x-4 m-4 border-solid border-black mb-4'>
                {items.map((item,index)=>(
                <div key={index} className='relative overflow-hidden shadow-xl mt-4 m-4 mx-auto group'>
                    <img src={item.image} alt="" className='h-48 w-full'/>
                    <div className='absolute h-full w-full bg-black/40 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700'>
                        <button className='text-white border-2 rounded-sm py-2 px-2'>View More</button>
                    </div>
                    <p className='uppercase text-center pt-2 text-lg font-mono'>{item.title}</p>
                </div>
                ))}
            </div>
    </>
  )
}

export default Categories