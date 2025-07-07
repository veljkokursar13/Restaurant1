import React from 'react'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const navigate = useNavigate()
  const proceedToMenu = () => {
    navigate('/menu')
    window.scrollTo(0, 0)
  } 
  return (
    <section className='home'>
      <Title text='Welcome to Foodie' subtitle='Discover amazing flavors and fresh ingredients' />
      <div className='home-content'>
        <div className='hero-text'>
          <h3>Delicious Food Delivered</h3>
          <p>
            Experience the finest culinary creations made with passion and the freshest ingredients. 
            Our menu features a variety of dishes that will satisfy your cravings and delight your taste buds.
          </p>
          <div className='hero-features'>
            <div className='feature'>
              <span>🍽️</span>
              <h4>Fresh Ingredients</h4>
              <p>Locally sourced and organic</p>
            </div>
            <div className='feature'>
              <span>⚡</span>
              <h4>Fast Delivery</h4>
              <p>Quick and reliable service</p>
            </div>
            <div className='feature'>
              <span>🌟</span>
              <h4>Quality Assured</h4>
              <p>Best taste guaranteed</p>
            </div>
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn btn-primary proceed-to-menu' onClick={proceedToMenu}>Proceed to Menu</button>
      </div>
    </section>
  )
}

export default HomePage 