import React from 'react'
import Title from '../components/Title'
import Reviews from '../components/Reviews'

const AboutPage = () => {
  return (
    <main>
    <section className='about'>
      <Title text='About Us' subtitle='Discover our story and passion for great food' />
      <div className='about-content'>
        <div className='about-text'>
          <h3>Our Story</h3>
          <p>
            Welcome to Foodie, where passion meets flavor and every dish tells a story. 
            Founded in 2020, we've been serving the community with love, creativity, and 
            the finest ingredients available.
          </p>
          
          <h3>Our Mission</h3>
          <p>
            We believe that great food has the power to bring people together, create 
            memories, and make every day special. Our mission is to deliver exceptional 
            dining experiences through innovative recipes, fresh ingredients, and 
            outstanding service.
          </p>
          
          <h3>Our Philosophy</h3>
          <p>
            Every dish we create is crafted with attention to detail, using locally 
            sourced ingredients whenever possible. We take pride in our diverse menu 
            that caters to all tastes and dietary preferences, ensuring everyone finds 
            something they love.
          </p>
          
          <div className='about-stats'>
            <div className='stat'>
              <h4>3+</h4>
              <p>Years of Excellence</p>
            </div>
            <div className='stat'>
              <h4>1000+</h4>
              <p>Happy Customers</p>
            </div>
            <div className='stat'>
              <h4>50+</h4>
              <p>Unique Dishes</p>
            </div>
          </div>
        </div>
      </div>
      <section className='about-reviews'>
        <Title text='Reviews' subtitle='What our customers say about us' />
        <Reviews />
      </section>
     
    </section>
    
    </main>
  )
}

export default AboutPage 