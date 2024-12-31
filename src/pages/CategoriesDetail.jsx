import React, { useEffect, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { Link, Outlet, useParams } from 'react-router';
import products from '../utility/ProductsData';

const CategoriesDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

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

  const {categoryID,categoryName} = useParams();
  const categoryId = parseInt(categoryID)
  const filterData = products.filter((product) => product.cateid === categoryId);

  return (
    <>
    <div>
      <div className='card-container'>
        <div className='grid grid-cols-4'>  
          {filterData.length > 0 ? (
          filterData.map((prod,index) => (
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
                <Link to={`/categories/${categoryId}/${categoryName}/product/${prod.prodName}/${prod.prodID}`}>
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

    </>
  )
}

export default CategoriesDetail