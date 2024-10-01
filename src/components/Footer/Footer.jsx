import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="footer" />
          <p>Know about the copyright </p>
          <div className="footer-social-icons">
            <img className="social-icon" src={assets.instagram} alt="" />
            <img className="social-icon" src={assets.facebook} alt="" />
            <img className="social-icon" src={assets.linkedin} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>+1-212-108-8888</li>
            <li>contact@shopbizz.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Shopbizz.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
