import React, { useEffect, useRef, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { Link, Outlet, useParams } from 'react-router-dom';
import products from '../../utility/ProductsData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const RelatedProducts = ({categoryName,categoryID,productID}) => {


    // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
    //Fetch Other Products of the 
    // const {productName,productID} = useParams();
    // const prodId = parseInt(productID);

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, [productID]);

    console.log(categoryID);
    const [likedProducts, setLikedProducts] = useState(
        products.reduce((acc, product) => {
          acc[product.prodID] = false; 
          return acc;
        }, {})
      );
    
      const toggleLike = (prodID) => {
        setLikedProducts((prevState) => ({
          ...prevState,
          [prodID]: !prevState[prodID], 
        }));
      };
    
    const otherProducts = products.filter((product) => (product.cateid === categoryID && product.prodID !== productID));
  return (
    <>
  <div className="flex flex-col justify-center items-center w-full">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-semibold">Related Products</h1>
        <h5 className="text-xl pt-4 text-gray-500">Chosen For You</h5>
      </div>

      {/* Product Slider */}
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {otherProducts.length > 0 ? (
            otherProducts.map((prod, index) => (
              <div key={index} className="p-4">
                <div className="w-52 max-h-full border rounded-xl border-gray-300 shadow-lg overflow-hidden">
                  {/* Product Image & Buttons */}
                  <div className="flex justify-end items-center relative">
                    <h1 className="absolute top-2 left-2 text-xs text-gray-400 z-20">ID: {prod.prodID}</h1>
                    <button className="py-2 px-2 absolute top-2 right-10 bg-blue-100 font-bold rounded-full z-20">
                      <GoLaw size={20} />
                    </button>
                    <button
                      className="py-2 px-2 absolute top-2 right-2 bg-gray-500 font-bold rounded-full z-20"
                      onClick={() => toggleLike(prod.prodID)}
                    >
                      <FaHeart
                        className={`text-center ${likedProducts[prod.prodID] ? "text-red-600" : "text-gray-50"}`}
                        size={20}
                      />
                    </button>
                    <img src={prod.prodImg} alt={prod.prodName} className="h-48 object-contain mx-auto" />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 font-roboto text-sm">
                    <h1 className="font-medium">
                      <Link to={`/categories/${categoryName}/${categoryID}/product/${prod.prodName}/${prod.prodID}`}>
                        {prod.prodName}
                      </Link>
                    </h1>
                    <p>{prod.prodDesc}</p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex flex-col">
                        <p className="text-gray-400 line-through">${prod.prodOldPrice}</p>
                        <p className="font-bold text-2xl">${prod.prodNewPrice}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded-lg">
                        <IoCartOutline size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-2xl">Sorry, No Products Found!</p>
          )}
        </Slider>
      </div>
    </div>



        {/* <hr className='border-gray-400 mx-10 my-8'/>
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-5xl font-semibold text-center'>Related Products</h1>
                <h5 className='text-xl pt-4 text-gray-500 text-center'>Chosen For you</h5>
            </div>
            <div>
      <div className='card-container'>
        <div className='grid grid-cols-4'>  
          {otherProducts.length > 0 ? (
          otherProducts.map((prod,index) => (
          <div key={index} className='w-52 max-h-full m-4 ml-16 border rounded-xl border-gray-300 shadow-lg overflow-hidden'>
            <div className='flex justify-end items-center'>
            <h1 className='absolute pb-40 pr-5 text-xs text-gray-400 z-20 '>ID: {prod.prodID}</h1>
              <button className='py-2 px-2 absolute bg-blue-100 mb-14 mr-4 font-bold rounded-full z-20'>
                  <GoLaw size={20}/>
              </button>
              <button className='py-2 px-2 absolute bg-gray-500 mt-8 mr-4 font-bold rounded-full z-20' onClick={() => toggleLike(prod.prodID)}>
                <FaHeart className={`text-center ${likedProducts[prod.prodID] ? 'text-red-600' : 'text-gray-50'}`} size={20} />
              </button>
            <img src={prod.prodImg} alt={prod.prodName} className='h-48 object-contain -z-10' />
            </div>
            <div className='pl-4 pr-4 font-roboto text-sm pt-2'>
              <h1 className='font-medium'>
                <Link to={`/categories/${categoryName}/${categoryID}/product/${prod.prodName}/${prod.prodID}`}>
                  {prod.prodName}
                </Link>
                </h1>
              <p>{prod.prodDesc}</p>
                <div className='flex justify-between items-center mt-5 mb-3'>
                  <div className='flex flex-col'>
                    <p className='text-gray-400 line-through'>${prod.prodOldPrice}</p>
                    <p className='font-bold text-2xl'>${prod.prodNewPrice}</p>
                  </div>
                  <button className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 
                  px-3 rounded-lg'><IoCartOutline size={24}/></button>
                </div>
            </div>
          </div>
      ))
    ) : (
      <p className='text-center text-2xl'>Sorry, No Products Found!</p>
    )}
        </div>
      </div>
    </div>

        </div> */}
    </>
  )
}

export default RelatedProducts