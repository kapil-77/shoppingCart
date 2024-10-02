import React from 'react'
import './PlaceOrder.css'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from '../../redux/cartSelector'

const PlaceOrder = () => {
  const totalAmount = useSelector(cartTotalSelector)

  return (
    <div className="order-container">
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>

        {/* Order Information */}
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${totalAmount === 0 ? '0' : '2'}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${totalAmount === 0 ? '0' : totalAmount + 2}</b>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
