import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/ProductPage/ProductPage.css'

function ProductPage(props) {
    const { products, handleAdd } = props;

    let params = useParams();
    console.log(products);
    const product = products.find(item => item.id == params.id);
    console.log(`product: ${product}`)

  return (
    <div className="productpage__main">
        <div className="productpage__container">
            <div className="productpage__left">
                <img src={product.image} alt="" />
            </div>
            <div className="productpage__right">
                <div className="productpage__right-heading">
                    <h1>{product.name}</h1>
                    <h3>${product.price}</h3>
                </div>
                <hr className="productpage__divider" />
                <div className="productpage__right-desc">
                    <p>{product.description}</p>
                </div>
                <button className="productpage__right-button" onClick={() => handleAdd(product)} >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductPage