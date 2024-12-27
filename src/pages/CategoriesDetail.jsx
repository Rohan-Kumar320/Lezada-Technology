import React, { useEffect, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { Link, Outlet, useParams } from 'react-router';

const CategoriesDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  

  const products = [
    {
      prodID: 1,
      cateid: 1,
      prodName: "Product 1",
      prodOldPrice: 149.99,
      prodNewPrice: 129.99,
      prodDesc: "This is product 1",
      prodImg: '/laptop-1.png'
    },
    {
      prodID: 2,
      cateid: 1,
      prodName: "Product 2",
      prodOldPrice: 179.99,
      prodNewPrice: 149.99,      
      prodDesc: "This is product 2",
      prodImg: '/laptop-1.png'
    },
    {
      prodID: 3,
      cateid:2,
      prodName: "Product 3",
      prodOldPrice: 199.99,
      prodNewPrice: 179.99,      
      prodDesc: "This is product 3",
      prodImg: '/laptop-1.png'
    },
    {
      prodID: 4,
      cateid: 2,
      prodName: "Product 4",
      prodOldPrice: 229.99,
      prodNewPrice: 199.99,      
      prodDesc: "This is product 4",
      prodImg: '/laptop-1.png'
    },
  ]

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
    <div className='w-[20%] h-screen bg-slate-200 rounded-tr-2xl shadow-md border border-gray-300 fixed'>
      <div>
      <Outlet/>
      <h1 className='text-center font-medium font-roboto text-2xl pt-5 text-slate-500'>Budget Laptop's</h1>
      </div>
    </div>
      <div className='card-container flex justify-center ml-44 '>
        <div className='grid grid-cols-3'>  
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