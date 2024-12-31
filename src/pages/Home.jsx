import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Categories from '../components/Categories'
import Preloader from '../components/Preloader'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import ViewMoreProds from '../components/ViewMoreProds'
import CategoriesDetail from './CategoriesDetail'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or some async operation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Hides preloader after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
    <Preloader isVisible={isLoading}/>
    {!isLoading && (
      <div>
        <Main/>
        <Categories/>
        <ViewMoreProds trigger={!isLoading}/>
        <Partners/>
      </div>    
      )} 
      
    </>
  )
}

export default Home