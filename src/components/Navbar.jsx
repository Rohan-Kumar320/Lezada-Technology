import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import Navlink from '../utility/Navlink';

const Navbar = () => {
    const [open,setopen] = useState(false);

    const openMenu = () =>{
        setopen(!open);
    };
return (
    <>
        <div className='bg-slate-400 top-0 border-b-2 h-20 flex mx-auto justify-between items-center sticky z-50'>
            <div className='uppercase text-2xl md:text-4xl font-thin ml-6 tracking-widest font-roboto'>
                Lezada
            </div>
            <div className='hidden md:flex mr-6 space-x-8'>
                <ul className='flex text-center space-x-6 pt-3'>
                    <li className='hover:border-b-4 font-roboto'> 
                        {/* <ScrollLink  to="home"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">Home</ScrollLink> */}
                            <Navlink to='/' scrollTo='home' label='Home'/>
                    </li>
                    <li className='hover:border-b-4 font-roboto'> 
                        <ScrollLink  to="categories"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">Categories</ScrollLink>
                        </li>
                    <li className='hover:border-b-4 font-roboto'> 
                        <ScrollLink  to="viewMore"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">More</ScrollLink>
                        </li>
                    <li className='hover:border-b-4 flex gap-x-1 font-roboto group'> 
                        <ScrollLink
                            to="cards"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer group-hover:text-slate-300"></ScrollLink><IoCartOutline size={26} className='group-hover:text-slate-300'/>
                        </li>
                </ul>
                    <button className='uppercase bg-black text-white tracking-normal rounded-sm py-3 px-4 font-roboto active:scale-[98%]'>Purchase Lazeda $24</button>
            </div>
            
            <div className='flex md:hidden'>
            {/* <button className='block md:hidden mr-2 md:mr-4 uppercase bg-black text-white tracking-normal text-xs sm:text-sm rounded-sm py-2 px-3 font-roboto active:scale-[98%]'>Purchase Lazeda $24</button> */}
                {!open ? 
                    <button className='block md:hidden mr-4' onClick={openMenu}><IoIosMenu size={25}/></button>
                    :
                    <button className='block md:hidden mr-4' onClick={openMenu}><HiOutlineMenuAlt1 size={25}/></button>
                }
            </div>

                {open && (
                <div className='absolute top-16 left-0 w-full bg-slate-400 border-t-2 border-black tracking-wide'>
                <ul className='text-center p-4 text-xl space-y-3 '>
                    <li className='hover:border-b-2 border-black font-roboto'>
                        <ScrollLink  to="home"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">Home</ScrollLink>
                        </li>
                    <li className='hover:border-b-2  border-black font-roboto'>
                    <ScrollLink  to="categories"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">Categories</ScrollLink>
                        </li>
                    <li className='hover:border-b-2  border-black font-roboto'>
                    <ScrollLink  to="viewMore"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">More</ScrollLink>
                        </li>
                    <li className='hover:border-b-2  border-black flex justify-center font-roboto'>
                    <ScrollLink
                            to="cards"  // Target the section with id="home"
                            smooth={true}
                            duration={500}  // Duration of the scroll in ms
                            className="cursor-pointer hover:text-slate-300">Cart Items </ScrollLink><IoCartOutline size={26} className='hover:text-slate-300'/>
                    </li>
                </ul>
            </div>
                )}
        </div>
    </>
  )
}

export default Navbar