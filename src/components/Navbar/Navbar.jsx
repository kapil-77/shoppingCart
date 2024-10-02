import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'
import './Navbar.css'
import Cart from '../../pages/Cart/Cart'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from '../../redux/cartSelector'

const Navbar = ({ onLogout, setShowLogin }) => {
  const navigate = useNavigate()

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [menu, setMenu] = useState('home')
  const totalAmount = useSelector(cartTotalSelector)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>
      </div>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <a
          href="#explore-products"
          onClick={() => setMenu('products')}
          className={menu === 'products' ? 'active' : ''}
        >
          Products
        </a>

        <a
          href="#footer"
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-box" />
        <div className="navbar-search-icon">
          <span className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart} />
          </span>
          <div className={totalAmount === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>

      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  )
}

export default Navbar
