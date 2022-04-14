import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { mensProducts } from '../Data/MenProducts'
import "../Styles/MensPage/MensPage.css"

function MensPage(props) {
  const { mensItems, setMensItems, cartItems, handleAdd } = props;
  const [sorting, setSorting] = useState("default");

  const handleSortingChange = (sorting) => {
    console.log(`before: ${sorting}`)
    setSorting(sorting);
    console.log(`after: ${sorting}`);
    
    if (sorting === "Price-Ascending") {
      handlePriceAscending();
    } else if (sorting === "Price-Descending") {
      handlePriceDescending();
    } else {
      handleSortDefault();
    }
  }

  const handleSortDefault = () => {
      let products = mensItems;
      products.sort((a, b) => a.id - b.id);
      setMensItems(products);
  }

  const handlePriceAscending = () => {
      let products = mensItems;
      products.sort((a, b) => a.price - b.price);
      setMensItems(products);
  }

  const handlePriceDescending = () => {
      let products = mensItems;
      products.sort((a, b) => b.price - a.price);
      setMensItems(products);
  }

  return (
    <>
      <div className="mens__container">
        <div className="mens__heading">
          <h1>MEN'S</h1>
          <p>Summer 2022 Collection</p>
        </div>
      </div>
      <div className="mens__product-container">
        <div className="mens__product-options">
          <div className="mens__product-options-sorting">
            <label htmlFor="">Sort Products</label>
            <select value={sorting} id="mens__product-sorting" onChange={(e) => handleSortingChange(e.target.value)}>
              <option value="Default">Default</option>
              <option value="Price-Ascending">Price Ascending</option>
              <option value="Price-Descending">Price Descending</option>
            </select>
          </div>
        </div>
        <div className="mens__product-items">
          {mensItems.map((item) => (
            <ProductCard key={item.id} product={item} category={"mens"} handleAdd={handleAdd} />
            ))}
        </div>
      </div>
    </>
  )
}

export default MensPage