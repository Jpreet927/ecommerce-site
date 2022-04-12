import React from 'react'
import { Link } from "react-router-dom"
import '../Styles/Navbar.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Navbar() {
  return (
    <div className="navbar__container">
        <h3>ALLORA SALVE</h3>
        <nav className="navbar__nav">
            <Link to="/" className="navbar__nav-link">Home</Link>
            <Link to="mens" className="navbar__nav-link">Mens</Link>
            <Link to="womens" className="navbar__nav-link">Womens</Link>
            <Link to="about" className="navbar__nav-link">About</Link>
            <Link to="checkout">
              <div className="navbar__cart-icon">
                <div className="navbar__cart-count">3</div>
                <ShoppingCartCheckoutIcon sx={{ color: 'white' }} className="mui-icon" />
              </div>
            </Link> 
        </nav>
    </div>
  )
}

export default Navbar