import React from 'react'
import '../Styles/ProductCard/ProductCard.css'

function ProductCard(props) {
    const { product } = props;

  return (
    <div className="product__container">
        <div className="product__main">
            <img src={product.image} alt={product.name} />
            <div className="product__details">
                <div className="product__name">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
        <button className="product__button">Add to Cart</button>
    </div>
  )
}

export default ProductCard