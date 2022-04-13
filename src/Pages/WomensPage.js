import React from 'react'
import ProductCard from '../Components/ProductCard'
import '../Styles/WomensPage/WomensPage.scss'
import { womensProducts } from '../Data/WomenProducts'
import { ListItem } from '@mui/material'

function WomensPage() {
  return (
    <>
      {}
      <div className="womens__container">
        <div className="womens__heading">
          <h1>WOMEN'S</h1>
          <p>Summer 2022 Collection</p>
        </div>
      </div>
      <div className="womens__product-section">
        {womensProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  )
}

export default WomensPage