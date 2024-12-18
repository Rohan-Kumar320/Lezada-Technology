import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const [open,setopen] = useState(false);

    const openMenu = () =>{
        setopen(!open);
    };
return (
    <>
        <div className='bg-slate-400 top-0 border-b-2 h-20 flex mx-auto justify-between items-center'>
            <div className='uppercase text-2xl md:text-4xl font-thin ml-6 tracking-widest '>
                Lezada
            </div>
            <div className='hidden md:flex mr-6 space-x-8'>
                <ul className='flex text-center space-x-6 pt-3'>
                    <li className='hover:border-b-4'>Home</li>
                    <li className='hover:border-b-4'>Support</li>
                    <li className='hover:border-b-4 flex gap-x-1'>Cart Items <IoCartOutline size={26}/> </li>
                </ul>
                    <button className='uppercase bg-black text-white tracking-normal rounded-sm py-3 px-4'>Purchase Lazeda $24</button>
            </div>
                {!open ? 
                <button className='block md:hidden mr-4' onClick={openMenu}><IoIosMenu size={25}/></button>
                :    
                <button className='block md:hidden mr-4' onClick={openMenu}><HiOutlineMenuAlt1 size={25}/></button>
                }
                {open && (
                <div className='absolute top-16 left-0 w-full bg-slate-400 border-t-2 border-black tracking-wide'>
                <ul className='text-center p-4 text-xl space-y-3 '>
                    <li className='hover:border-b-2 border-black'>Home</li>
                    <li className='hover:border-b-2  border-black'>Services</li>
                    <li className='hover:border-b-2  border-black flex justify-center'>Cart Items <IoCartOutline size={26}/></li>
                </ul>
            </div>
                )}
        </div>
    </>
  )
}

export default Navbar