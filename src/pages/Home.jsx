import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Categories from '../components/Categories'
import Fun from '../components/Fun'
import Preloader from '../components/Preloader'
import Partners from '../components/Partners'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or some async operation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Hides preloader after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
    <Preloader isVisible={isLoading}/>
    {!isLoading && (
      <div>
        <Navbar/>
        <Main/>
        <Categories/>
        <Fun/>
        <Partners/>
      </div>
      )}
    </>
  )
}

export default Home