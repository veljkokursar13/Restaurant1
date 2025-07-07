import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Utensils } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Initialize cart count on component mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    
    const cartCountElement = document.querySelector('.cart-count')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMobileMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <h2><Utensils size={24} /> Foodie</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Cart
          </Link>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="nav-cart" onClick={closeMobileMenu}>
          <button 
            className="cart-icon-btn" 
            title="Shopping Cart"
          >

            <ShoppingCart size={20} />
            <span className="cart-count">0</span>
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 