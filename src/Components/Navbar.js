import React from 'react'
import { Link } from "react-router-dom"
import Cart from "../Components/Cart"
import '../Styles/Navbar/Navbar.css'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Navbar(props) {
  const { cartItems, cartVisible, setCartVisible, handleRemove } = props;

  const handleCartVisible = () => {
    setCartVisible(true);
  }

  const handleCartInvisible = () => {
    setCartVisible(false);
  }

  return (
    <>
      <div className="navbar__container">
          <h3>ALLORA SALVE</h3>
          <nav className="navbar__nav">
              <Link to="/" className="navbar__nav-link">Home</Link>
              <Link to="mens" className="navbar__nav-link">Mens</Link>
              <Link to="womens" className="navbar__nav-link">Womens</Link>
              <Link to="about" className="navbar__nav-link">About</Link>
              <div className="navbar__cart-icon">
                { cartItems.length > 0 && <div className="navbar__cart-count">{ cartItems.length }</div> }
                <ShoppingCartCheckoutIcon sx={{ color: 'white' }} className="mui-icon" onClick={handleCartVisible} />
              </div>
          </nav>
      </div>
      { cartVisible && <Cart cartItems={cartItems} handleRemove={handleRemove} handleCartInvisible={handleCartInvisible} /> }
    </>
  )
}

export default Navbar