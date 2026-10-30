import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/footer_logo.svg'
import userIcon from '../../assets/user_icon.svg'
import arrowIcon from '../../assets/arrow_icon.svg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerLogo} alt="Logo" />
          <p>
            A passionate developer building modern web experiences. Feel free to
            connect and collaborate.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-subscribe">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn" onClick={() => alert("Thanks for subscribing!")}>
              Subscribe <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prinson Royal Nazareth. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
