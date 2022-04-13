import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Cart/Cart.css'

function Cart(props) {
    const { cartItems, handleRemove, handleCartInvisible } = props;

    const totalPrice = cartItems.reduce((acc, curr) => (
        acc + (curr.price * curr.quantity)
    ), 0);

  return (
    <div className="cart__main">
        <div className="cart__header">
            <h3>Cart</h3>
            <CloseIcon sx={{ color: 'white' }} onClick={handleCartInvisible} />
        </div>
        <hr className="cart__divider" />
        <div className="cart__items">
            {cartItems.map((item) => (
                <CartItem key={item.id} product={item} handleRemove={handleRemove} />
                ))}
        </div>
        <hr className="cart__divider"></hr>
        <div className="cart__footer">
            <h5>Cart Total</h5>
            <p>${totalPrice}</p>
        </div>
        <Link to="checkout"><button className="cart__checkout-button">Go to Checkout</button></Link>
    </div>
  )
}

export default Cart