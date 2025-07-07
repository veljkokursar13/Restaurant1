import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const goGrabSomeFood = () => {
    navigate('/menu')
  }

  useEffect(() => {
    loadCartItems()
    
    // Listen for storage changes (when items are added from other components)
    const handleStorageChange = () => {
      loadCartItems()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom events
    window.addEventListener('cartUpdated', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdated', handleStorageChange)
    }
  }, [])

  const loadCartItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    console.log('Cart loaded:', cart) // Debug log
    setCartItems(cart)
  }

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0)
    
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCartItems(updatedCart)
    updateCartCount()
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCartItems(updatedCart)
    updateCartCount()
  }

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    
    const cartCountElement = document.querySelector('.cart-count')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleCheckout = () => {
    alert('Thank you for your order! This is a demo application.')
    localStorage.removeItem('cart')
    setCartItems([])
    updateCartCount()
  }

  return (
    <section className='cart'>
      <Title text='My Cart' subtitle='Review your order and proceed to checkout' />
      <div className='cart-container'>
        {cartItems.length === 0 ? (
          <div className='empty-cart'>
            <h3>Your cart is empty</h3>
            <div className='btn-wrapper'>
              <button className='btn btn-primary go-grab-some-food' onClick={goGrabSomeFood}>Go Grab Some Food</button>
            </div>
          </div>
        ) : (
          <>
            <div className='cart-items'>
              {cartItems.map((item) => (
                <div key={item.id} className='cart-item'>
                  <img src={item.img} alt={item.title} className='cart-item-img' />
                  <div className='cart-item-info'>
                    <h4>{item.title}</h4>
                    <p className='cart-item-price'>${item.price}</p>
                  </div>
                  <div className='cart-item-controls'>
                    <button 
                      className='quantity-btn'
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className='quantity'>{item.quantity}</span>
                    <button 
                      className='quantity-btn'
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className='cart-item-total'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    className='remove-btn'
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className='cart-summary'>
              <h3>Order Summary</h3>
              <div className='summary-item'>
                <span>Subtotal:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className='summary-item'>
                <span>Tax:</span>
                <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className='summary-item total'>
                <span>Total:</span>
                <span>${(calculateTotal() * 1.08).toFixed(2)}</span>
              </div>
              <button className='checkout-btn' onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart 