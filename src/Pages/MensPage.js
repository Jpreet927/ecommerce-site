import React from 'react'
import ProductCard from '../Components/ProductCard'
import { mensProducts } from '../Data/MenProducts'
import "../Styles/MensPage/MensPage.css"

function MensPage() {
  return (
    <>
      <div className="mens__container">
        <div className="mens__heading">
          <h1>MEN'S</h1>
          <p>Summer 2022 Collection</p>
        </div>
      </div>
      <div className="mens__product-section">
      {mensProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </>
  )
}

export default MensPage