import React from 'react'
import Home from './pages/Home'
import {  BrowserRouter,Routes, Route} from 'react-router'
import CategoriesDetail from './pages/CategoriesDetail'
import ProductsDetail from './pages/ProductsDetail'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryName/:categoryID" element={<CategoriesDetail />} />
          <Route path="/categories/:categoryName/:categoryID/product/:productName/:productID" element={<ProductsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App