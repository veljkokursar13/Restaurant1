import React from 'react'

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form submitted')
    }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
            <input 
                type='text' 
                name='name' 
                placeholder='Your Name' 
                className='form-control' 
                required
            />
        </div>
        <div className='form-group'>
            <input 
                type='email' 
                name='email' 
                placeholder='Your Email' 
                className='form-control' 
                required
            />
        </div>
        <div className='form-group'>
            <textarea 
                name='message' 
                placeholder='Your Message' 
                className='form-control form-textarea' 
                rows='5'
                required
            ></textarea>
        </div>
        <button type='submit' className='btn'>Send Message</button>
    </form>
  )
}

export default ContactForm