import React from 'react'
import { useParams } from 'react-router'

const ProductsDetail = () => {
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
    
    const {productName,productID} = useParams();
    const productid = parseInt(productID);
    const specificProduct = products.find((product)=> product.prodID === productid);
  return (
    <>
        <div>
            <h1>{specificProduct.prodName}</h1>
            <p>Product ID: {specificProduct.prodID}</p>
            <p>Category ID: {specificProduct.cateid}</p>
            <p>Old Price: ${specificProduct.prodOldPrice}</p>
            <p>New Price: ${specificProduct.prodNewPrice}</p>
            <p>Product Description: {specificProduct.prodDesc}</p>
        </div>
    </>
  )
}

export default ProductsDetail