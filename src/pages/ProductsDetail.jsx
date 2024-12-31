import React, { useRef, useState } from 'react'
import { useParams } from 'react-router'
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import products from '../utility/ProductsData';

const ProductsDetail = () => {

    //For Handling Image Open and Close
    const [isImageOpen,setIsImageOpen] = useState(false);

    const handleImageOpen = () =>{
        setIsImageOpen(true)
    }

    const handleImageClose = () =>{
        setIsImageOpen(false)
    }

    //For Fetching Products
    const {productName,productID} = useParams();
    const productid = parseInt(productID);
    const specificProduct = products.find((product)=> product.prodID === productid);


    //For Handling Image Hover animation
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = imageRef.current.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        imageRef.current.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        imageRef.current.style.transform = "scale(1.4)";
    }

    const handleMouseLeave = () => {
        imageRef.current.style.transform = "scale(1)";
        imageRef.current.style.transformOrigin = "center";    
    };

    //For Handling quantity increase and decrease

    const [itemCount,setItemCount] = useState(1);

    const increaseQuantity = () =>{
        setItemCount(itemCount + 1);
    }

    const decreaseQuantity = () =>{
        if(itemCount > 1)
        setItemCount(itemCount - 1);
    }

    //For Handling multiple images
    const images = {
        img1: '/ios.jpeg',
        img2: '/front-4.jpg',
        img3: '/laptop-1.png',
    }

    const [isImageSelected,setIsImageSelected] = useState(images.img1);
    const [activeImage,setActiveImage] = useState(false);

    const handleActiveImage = () =>{
        setActiveImage(!true);
    }

    return (
    <>
        <div className='flex flex-row justify-evenly items-center'>
            <div className='flex flex-col justify-between '>
                    <div className='border border-gray-300 rounded-xl max-w-[80%] h-[600px] overflow-hidden m-6' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <img ref={imageRef} onClick={handleImageOpen} src={isImageSelected} alt="" className='h-full object-cover transition-transform duration-500'/>
                    </div>
                <div className='flex flex-row justify-center items-center w-[86%] space-x-4'>
                    <img src={images.img1} onClick={() => {setIsImageSelected(images.img1); }} alt="" 
                        className={`w-36 h-36 rounded-xl object-contain ${activeImage ? `border border-blue-500` : `border border-gray-300`} `}/>
                    <img src={images.img2} onClick={() => {setIsImageSelected(images.img2); }} alt="" 
                        className={`w-36 h-36  rounded-xl object-contain ${activeImage ? `border border-blue-500` : `border border-gray-300`} `}/>
                    <img src={images.img3} onClick={() => {setIsImageSelected(images.img3); }} alt="" 
                        className={`w-36 h-36 rounded-xl object-contain ${activeImage ? `border border-blue-500` : `border border-gray-300`} `}/>
                </div>
            </div>  
                
            {isImageOpen && (
                <div className='flex justify-center items-center fixed z-50 inset-0 bg-black bg-opacity-75'>
                    <div className='relative'>
                        <button onClick={handleImageClose} className='absolute top-2 right-2 rounded-full bg-black text-white text-center px-[14.7px] py-2 hover:bg-red-600'>
                            X
                        </button>
                    <img src="/ios.jpeg" alt="" className='max-h-[80vh] max-w-full object-contain'/>
                    </div>
            </div>
            )}
            
            <div className='flex flex-col font-roboto space-y-1'>
                <h1 className='font-light text-5xl'>{specificProduct.prodName}</h1>
                <div className='flex flex-row justify-start items-center pb-3'>
                    <p className='font-medium text-3xl'>${specificProduct.prodNewPrice}</p>
                    <p className='text-gray-400 text-xl pt-1 pb-2 line-through pl-4'>${specificProduct.prodOldPrice}</p>
                </div>
                <div className='flex flex-row justify-start items-center space-x-2 pb-4'>
                <FaStar className='text-yellow-500' size={20}/>
                <FaStar className='text-yellow-500' size={20}/>
                <FaStar className='text-yellow-500' size={20}/>
                <FaStar className='text-yellow-500' size={20}/>
                <FaStar className='text-yellow-500' size={20}/>
                <p className='text-gray-400 text-lg pl-4'>(5 Customer Review)</p>
                </div>
                <hr />
                <p className='leading-relaxed text-balance w-[600px] pt-6'>{specificProduct.prodDesc}</p>
                <p className='pt-5'><span className='text-blue-600'>SKU:</span> Ch-256xl </p>
                <p><span className='text-blue-600'>Categories:</span> Smart Device, Laptop</p>
                <p><span className='text-blue-600'>Tags:</span> Smart Device, Laptop</p>
                <div className='flex flex-row justify-start items-center pt-8'>
                    <div className='flex flex-row justify-evenly items-center px-2 py-3.5 text-center text-white rounded-md bg-gray-700 hover:bg-gray-800 group'>
                    <button onClick={decreaseQuantity} className='text-xl pr-3'><FiMinus /></button>
                    <input type='text' placeholder={itemCount} className='placeholder:text-white placeholder:text-center text-sm bg-gray-700 group-hover:bg-gray-800 w-5 focus:outline-none focus:ring-0'/>
                    <button onClick={increaseQuantity} className='text-2xl pl-3'><GoPlus /></button>
                    </div>
                    <button className='bg-blue-600 text-white px-12 py-3 ml-2 rounded-md font-medium text-xl hover:bg-black duration-200'>Add To Cart</button>
                    <button className='ml-2 rounded-md px-3 py-3 bg-gray-700 hover:bg-gray-800'><CiHeart size={27} color='white'/></button>
                    <button className='ml-2 rounded-md px-3 py-3 bg-gray-700 hover:bg-gray-800'><IoIosGitCompare size={27} color='white'/></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductsDetail