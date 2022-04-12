import React from 'react'
import '../Styles/ProductCard/ProductCard.css'

function ProductCard() {
  return (
    <div className="product__container">
        <div className="product__main">
            <img src={require('../Assets/Images/Women/3.jpg')} alt="" />
            <div className="product__details">
                <div className="product__name">
                    <h3>Product Name</h3>
                    <p>Enim dolor ea officia duis dolore sint ea occaecat laboris voluptate reprehenderit.</p>
                    <p>$1200.99</p>
                </div>
            </div>
        </div>
        <button className="product__button">Add to Cart</button>
    </div>
  )
}

export default ProductCard