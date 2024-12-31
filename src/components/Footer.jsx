import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className=" md:rounded-tl-[100px] bg-slate-400 mt-4">
                <div className='flex flex-col justify-center md:flex-row md:justify-evenly items-center p-4'>
                    <div className='w-64'>
                        <h1 className='text-center text-xl md:text-2xl md:text-start font-semibold font-roboto'>Lezada Tech</h1>
                        <p className='text-center pt-3 md:text-start container text-xs md:pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium a beatae quia officiis eveniet dicta ipsam. Deserunt nobis ullam libero maiores necessitatibus aliquam enim hic.</p>
                    </div>
                    <div className='text-xs'>
                        <h1 className='pt-3 md:pt-0 pb-2.5 text-center md:text-start text-lg font-semibold font-roboto'>Office</h1>
                        <p className='pt-2'>Aptech Computer Learning</p>
                        <p>Sharah e Faisal Road,</p>
                        <p>Karachi, Pakistan</p>
                        <p className='font-semibold underline pt-3'>aptechlearning@gmail.com</p>
                        <p className='text-center md:text-start font-semibold pt-3'>+92-3657485749</p>
                    </div>
                    <div className='text-xs'>
                        <h1 className='pt-3 md:pt-0 pb-3 text-center md:text-start text-lg font-semibold font-roboto'>Link's</h1>
                        <ul className='leading-6'>
                            <li>Home</li>
                            <li>Service's</li>
                            <li>About Us</li>
                            <li>Features</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='text-xs'>
                        <h1 className='pt-3 md:pt-0 pb-3 text-center md:text-start text-lg font-semibold font-roboto'>Newsletter</h1>
                        <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 mt-3 mb-8 border
                        border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 text-gray-900 text-sm
                        focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5  dark:bg-slate-400 dark:border-gray-600 
                        dark:placeholder-black dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" placeholder="Enter your email id"/>
                        <div className='flex justify-evenly items-center'>
                        <CiFacebook size={32}/>
                        <FaInstagram size={28}/>
                        <FaXTwitter size={28}/>
                        <FaSnapchat size={28}/>
                        </div>
                    </div>
            </div>
            <hr class="h-px m-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className='flex justify-center items-center'>
            <p className='text-xs pb-4'>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer