import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import '../Styles/WomensPage/WomensPage.scss'
import { womensProducts } from '../Data/WomenProducts'
import { ListItem } from '@mui/material'

function WomensPage(props) {
  const { womensItems, setWomensItems, handleAdd } = props;
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
      let products = womensItems;
      products.sort((a, b) => a.id - b.id);
      setWomensItems(products);
  }

  const handlePriceAscending = () => {
      let products = womensItems;
      products.sort((a, b) => a.price - b.price);
      setWomensItems(products);
  }

  const handlePriceDescending = () => {
      let products = womensItems;
      products.sort((a, b) => b.price - a.price);
      setWomensItems(products);
  }

  return (
    <>
      <div className="womens__container">
        <div className="womens__heading">
          <h1>WOMEN'S</h1>
          <p>Summer 2022 Collection</p>
        </div>
      </div>
      <div className="womens__product-container">
        <div className="womens__product-options">
          <div className="womens__product-options-sorting">
            <label htmlFor="">Sort Products</label>
            <select value={sorting} id="womens__product-sorting" onChange={(e) => handleSortingChange(e.target.value)}>
              <option value="Default">Default</option>
              <option value="Price-Ascending">Price Ascending</option>
              <option value="Price-Descending">Price Descending</option>
            </select>
          </div>
        </div>
        <div className="womens__product-items">
          {womensItems.map((item) => (
            <ProductCard key={item.id} product={item} category={"womens"} handleAdd={handleAdd} />
            ))}
        </div>
      </div>
    </>
  )
}

export default WomensPage