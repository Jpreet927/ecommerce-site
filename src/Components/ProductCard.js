import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ProductCard/ProductCard.css'

function ProductCard(props) {
    const { product, category, handleAdd } = props;

  return (
    <div className="product__container">
        <Link to={`/${category}/${product.id}`}>
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
        </Link>
        <button className="product__button" onClick={() => handleAdd(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard