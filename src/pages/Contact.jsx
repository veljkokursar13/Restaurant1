import React from 'react'
import Title from '../components/Title'
import ContactForm from '../components/contactForm'

const Contact = () => {
  return (
    <main>
        <section className='contact-page'>
            <Title text='Contact' subtitle='We love to hear from you' />
            <ContactForm />
        </section>
        
    </main>
  )
}

export default Contact