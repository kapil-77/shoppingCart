import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/actions'
import { assets } from '../../assets/assets'
import './Cart.css'
import { cartTotalSelector } from '../../redux/cartSelector'
import { useNavigate } from 'react-router-dom'

const Cart = ({ isOpen, toggleCart }) => {
  const cart = useSelector((state) => state.cart.cart)
  const totalAmount = useSelector(cartTotalSelector)
  console.log(cart)

  const navigate = useNavigate()

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

  const handleClick = () => {
    navigate('/order')
    toggleCart()
  }

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <img onClick={toggleCart} src={assets.cross_icon} alt="" />
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
      <div className="buy-items">
        <div className="total-price">Total - ${totalAmount}</div>
        <div className="buy">
          <button onClick={handleClick} className="buy-button">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
