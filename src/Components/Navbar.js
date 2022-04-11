import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar__container">
        <h3>Lorem Ipsum</h3>
        <nav>
            <Link to="/">Home</Link>
            <Link to="mens">Mens</Link>
            <Link to="womens">Womens</Link>
            <Link to="about">About</Link>
        </nav>
    </div>
  )
}

export default Navbar