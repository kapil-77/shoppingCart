import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/actions'
import './Cart.css'

const Cart = ({ isOpen, toggleCart }) => {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    console.log(id)
    dispatch(removeFromCart(id))
  }

  const handleIncrease = (id) => {
    console.log(id)
    dispatch(increaseQuantity(id))
  }

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id))
  }
  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <button className="close-button" onClick={toggleCart}>
          X
        </button>
        <h2>Your Cart</h2>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty....</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <div className="quantity-buttons">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button
                  className="remove-cartItem"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
