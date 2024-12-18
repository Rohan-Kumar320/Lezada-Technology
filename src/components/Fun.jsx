import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fun = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 120,    // Offset (in px) from the original trigger point
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
    <div data-aos="fade-right" className='m-4 mb-24'>
        <img src="./front-1.jpg" alt="" width={800}/>
    </div>
    </>
  )
}

export default Fun