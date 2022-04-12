import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/HomePage.css'

function HomePage() {
  return (
    <div className="home__container">
      <div className="home__heading">
        <h1>ALLORA SALVE</h1>
        <p>Explore the Summer 2022 Men's and Women's Collections</p>
        <div className="home__heading-buttons">
          <Link to="mens"><button>Shop Men's</button></Link>
          <Link to="womens"><button>Shop Women's</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage