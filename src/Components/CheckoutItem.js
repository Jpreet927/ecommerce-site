import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../Styles/CheckoutItem/CheckoutItem.css'

function CheckoutItem(props) {
    const { product, handleIncrementQuantity, handleDecrementQuantity, handleRemove } = props;

  return (
    <div className="checkoutitem__main">
        <div className="checkoutitem__information">
            <div className="checkoutitem__column checkoutitem__thumbnail">
                <img src={product.image} alt="" />
            </div>
            <div className="checkoutitem__column checkoutitem__name">
                <h3>{product.name}</h3>
            </div>
            <div className="checkoutitem__column checkoutitem__price">
                <p>${product.price}</p>
            </div>
            <div className="checkoutitem__column checkoutitem__quantity">
                <button><RemoveIcon sx={{ color: 'white' }} onClick={ () => handleDecrementQuantity(product) } /></button>
                <p>{product.quantity}</p>
                <button><AddIcon sx={{ color: 'white' }} onClick={ () => handleIncrementQuantity(product) } /></button>
            </div>
            <div className="checkoutitem__column checkoutitem__delete">
                <DeleteIcon onClick={() => handleRemove(product)} sx={{ color: 'white' }} />
            </div>
        </div>
    </div>
  )
}

export default CheckoutItem