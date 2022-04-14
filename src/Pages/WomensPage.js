import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import '../Styles/WomensPage/WomensPage.scss'
import { womensProducts } from '../Data/WomenProducts'
import { ListItem } from '@mui/material'

function WomensPage(props) {
  const { handleAdd } = props;

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
          <Link to={`/womens/${item.id}`}><ProductCard key={item.id} product={item} handleAdd={handleAdd} /></Link>
        ))}
      </div>
    </>
  )
}

export default WomensPage