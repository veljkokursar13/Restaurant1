import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='section-center'>
            <section className='footer-info'>
                <p>
                    &copy; {new Date().getFullYear()} Foodie. All rights reserved.
                </p>
            </section>
        </section>
    </footer>
  )
}

export default Footer