import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../Styles/CartItem/CartItem.css'

function CartItem(props) {
    const { product, handleRemove } = props;
  return (
    <div className="cartitem__main">
        <div className="cartitem__information">
            <div className="cartitem__thumbnail">
                <img src={product.image} alt="" />
            </div>
            <div className="cartitem__details">
                <h3>{product.name}</h3>
                <p>{product.quantity} x ${product.price}</p>
            </div>
        </div>
        <DeleteIcon onClick={() => handleRemove(product)} sx={{ color: 'white' }} />
    </div>
  )
}

export default CartItem