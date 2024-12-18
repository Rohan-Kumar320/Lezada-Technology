import React, { useState } from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 1
}
const Main = () => {
    
    return (
        <>
            <div className='bg-slate-200'>
                <div>
                    <p className='uppercase text-center pt-4 tracking-normal font-normal text-gray-700'>
                        Welcome to Lezada
                    </p>
                    <p className='text-center text-3xl sm:text-4xl md:text-4xl font-bold font-sans pt-6 text-gray-700'>
                        Minimal & Creative
                    </p>
                    <p className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold font-sans pt-4 text-gray-700'>
                        React Js Multipurpose eCommerce Template
                    </p>
                    <div className='mt-6 overflow-hidden '>
                        {/* <img src="./front-1.jpg" alt="" width={1000} className='pt-6 pb-4 mx-auto'/> */}
                        <Flickity
                            className={'carousel'} // default ''
                            elementType={'div'} // default 'div'
                            options={flickityOptions} // takes flickity options {}
                            disableImagesLoaded={false} // default false
                            reloadOnUpdate // default false
                            static // default false
                        >
                            <img src="./front-2.jpg" width={1000}/>
                            <img src="./front-1.jpg" width={1000}/>
                            <img src="./front-4.jpg" width={1000}/>
                        </Flickity>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main