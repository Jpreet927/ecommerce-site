import React from 'react'
import CheckoutItem from '../Components/CheckoutItem';
import '../Styles/CheckoutPage/CheckoutPage.css'

function CheckoutPage(props) {
  const { cartItems, handleIncrementQuantity, handleDecrementQuantity, handleRemove } = props;

  const SHIPPING_COST = Math.round(15 * 100) / 100;

  const totalQuantity = Math.round(cartItems.reduce((acc, curr) => (
    acc + curr.quantity
  ), 0) * 100) / 100;

  const subTotal = Math.round(cartItems.reduce((acc, curr) => (
    acc + (curr.price * curr.quantity)
  ), 0) * 100) / 100;

  const taxSubtotal = Math.round(subTotal * 0.13 * 100) / 100;
  const orderTotal = Math.round((subTotal + taxSubtotal + SHIPPING_COST) * 100) / 100;

  return (
    <div className="checkout__container">
      <div className="checkout__main">
        <div className="checkout__items-container">
          <div className="checkout__items-heading">
            <h1>Shopping Cart</h1>
            <p>{totalQuantity} Items</p>
          </div>
          <hr className="checkout__divider" />
          <div className="checkout__items">
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} product={item} handleIncrementQuantity={handleIncrementQuantity} handleDecrementQuantity={handleDecrementQuantity} handleRemove={handleRemove} />
            ))}
          </div>
        </div>
        <div className="checkout__summary">
          <div className="checkout__summary-heading">
            <h1>Summary</h1>
            <hr className="checkout__divider" />
          </div>
          <div className="checkout__summary-details">
              <div className="checkout__summary-details-title">
                <p>Total products</p>
                <p>GST/HST</p>
                <p>Shipping total</p>
              </div>
              <div className="checkout__summary-details-prices">
                <p>${subTotal}</p>
                <p>${taxSubtotal}</p>
                <p>${SHIPPING_COST}</p>
              </div>
          </div>
          <div className="checkout__summary-total">
            <div>
              <p className="checkout__summary-total-text">Total</p>
              <p className="checkout__summary-tital-price">${orderTotal}</p>
            </div>
            <hr className="checkout__divider" />
            <button className="checkout__summary-order-button">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage