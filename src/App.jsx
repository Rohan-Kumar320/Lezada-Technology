import React from 'react'
import Home from './pages/Home'
import {  BrowserRouter,Routes, Route, } from 'react-router'
import CategoriesDetail from './pages/CategoriesDetail'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:ccid" element={<CategoriesDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App