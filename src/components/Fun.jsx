import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fun = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200,    // Offset (in px) from the original trigger point
            easing: 'ease-in-out', // Easing function for the animation
            once: false,
        });
        // Force AOS to refresh on scroll
    const handleScroll = () => {
        AOS.refresh();
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    },[]);

  return (
    <>
    <div data-aos="fade-right" className=' m-4 mb-24 overflow-hidden bg-slate-50 md:flex justify-evenly items-center md:space-x-16'>
      <div className='text-center font-mono md:text-start overflow-hidden'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl'><span className='font-bold'>07+</span> shop</h1>
        <h1 className='text-2xl sm:text-3xl md:text-4xl'>laptop design's</h1>
        <button className='mb-3 mt-3 border-b-2 border-black hover:animate-pulse'>View More</button>
      </div>
      <img src="./front-5.jpg" alt="" className=' md:max-w-[60%]'/>
    </div>

    <div data-aos="fade-right" className='m-4 mb-24 overflow-hidden bg-slate-50 md:flex justify-evenly items-center md:space-x-16'>
      <img src="./front-2.jpg" alt="" className=' md:max-w-[60%] overflow-hidden'/>
      <div className='text-center font-mono md:text-start'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl'><span className='font-bold'>Best 3D</span> shop</h1>
        <h1 className='text-2xl sm:text-3xl md:text-4xl'>laptop design's</h1>
        <button className='mb-3 mt-3 border-b-2 border-black hover:animate-pulse'>View More</button>
      </div>
    </div>
    </>
  )
}

export default Fun