import React from "react";

const Preloader = ({isVisible}) => {
  return (
<div
    className={`fixed inset-0 bg-slate-400 flex items-center justify-center z-50 transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
    }`}
    >      
    <div>
        <h1 className="font-thin text-xl border-b-4 border-black border-opacity-75 animate-pulse">Welcome To Lezada Technology</h1>
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-black ml-[40%] mt-4"></div>
    </div>
    </div>
  );
};

export default Preloader;
