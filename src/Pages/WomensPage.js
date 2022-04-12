import React from 'react'
import Product from '../Components/ProductCard'
import '../Styles/WomensPage/WomensPage.scss'

function WomensPage() {
  return (
    <>
      <div className="womens__container">
        <div className="womens__heading">
          <h1>WOMEN'S</h1>
          <p>Summer 2022 Collection</p>
        </div>
      </div>
      <div className="womens__product-section">
        <Product />
      </div>
    </>
  )
}

export default WomensPage