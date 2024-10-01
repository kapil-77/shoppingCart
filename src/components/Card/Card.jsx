import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Card.css'
import { decreaseQuantity, increaseQuantity } from '../../redux/actions'

const Card = ({ product, onClick, onAddToCart }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const itemInCart = cart.find((item) => item.id === product.id)

  return (
    <div className="card" id="explore-products">
      <img onClick={onClick} src={product.image} alt={product.title} />

      <div>
        <h5>{product.title}</h5>
        <p>${product.price}</p>
        {itemInCart ? (
          <div className="quantity-buttons">
            <button onClick={() => dispatch(decreaseQuantity(product.id))}>
              -
            </button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(product.id))}>
              +
            </button>
          </div>
        ) : (
          <div className="add-to-cart">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart()
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
