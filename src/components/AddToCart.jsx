import React, { useState } from 'react'
import { ShoppingCart, CheckCircle } from 'lucide-react'

const AddToCart = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    console.log('Current cart before adding:', existingCart) // Debug log
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id)
    
    if (existingItemIndex >= 0) {
      // If item exists, increase quantity
      existingCart[existingItemIndex].quantity += 1
    } else {
      // If item doesn't exist, add it with quantity 1
      existingCart.push({
        ...item,
        quantity: 1
      })
    }
    
    console.log('Cart after adding item:', existingCart) // Debug log
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart))
    
    // Dispatch custom event to notify Cart component
    window.dispatchEvent(new Event('cartUpdated'))
    
    // Show visual feedback
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1000)
    
    // Update cart count in navbar
    updateCartCount()
  }

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    
    // Update cart count display
    const cartCountElement = document.querySelector('.cart-count')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems
    }
  }

  return (
    <button 
      className={`add-to-cart-icon ${isAdded ? 'added' : ''}`} 
      onClick={handleAddToCart}
      title={`Add ${item.title} to cart`}
    >
      <ShoppingCart size={16} />
      {isAdded && <CheckCircle size={16} className="added-text" />}
    </button>
  )
}

export default AddToCart