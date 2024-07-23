import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import Cart from '../../pages/Cart/Cart'

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate()

  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const handleLogout = () => {
    onLogout()
    navigate('/signup')
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Alpha</Link>
      </div>

      <div className="navbar-right">
        <span className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart} />
        </span>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  )
}

export default Navbar
