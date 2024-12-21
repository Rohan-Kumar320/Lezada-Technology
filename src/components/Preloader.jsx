import gsap from "gsap-trial";
import React, { useEffect } from "react";
import SplitType from "split-type";

const Preloader = ({isVisible}) => {

  
  useEffect(() => {
    const splitPreload = new SplitType('.preload',{type: 'chars'}) 
    const chars = splitPreload.chars

    const preload = gsap.from(chars,{
      yPercent: 100,
      stagger: 0.08,
      duration: 0.5,
      delay: 0.2,
      ease: 'back.out',

    })
  
    return () => {
      preload.kill();
    }
  }, [])
  
  return (
<div
    className={`fixed inset-0 bg-slate-400 flex items-center justify-center z-50 transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
    }`}
    >      
    <div>
        <p className="preload font-thin text-xl md:text-2xl overflow-hidden border border-b-2 border-t-0 border-l-0 border-r-0 border-black border-opacity-75 font-roboto">Welcome To Lezada Technology</p>
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-black ml-[40%] mt-10"></div>
    </div>
    </div>
  );
};

export default Preloader;
