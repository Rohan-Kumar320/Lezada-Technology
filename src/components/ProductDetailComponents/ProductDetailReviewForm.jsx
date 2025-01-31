import React from 'react'

const ProductDetailReviewForm = () => {
  return (
    <>
<div className="flex flex-col justify-start items-center bg-transparent p-6 rounded-lg shadow-md w-full max-w-lg relative">
  <div className="text-center mb-4">
    <h1 className="text-xl font-semibold text-gray-800">Add a Review</h1>
    <h5 className="text-sm font-medium text-gray-600 mt-2">Your Rating: ⭐⭐⭐⭐⭐</h5>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-4">
    <div className="w-full">
      <input 
        type="text" 
        placeholder="Name" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
      />
    </div>
    <div className="w-full">
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
      />
    </div>
  </div>
  <textarea
    name="Message"
    placeholder="Write your review..."
    rows='4'
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
  ></textarea>
  <button 
    type="submit" 
    className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
  >
    Submit
  </button>
</div>
    </>
  )
}

export default ProductDetailReviewForm