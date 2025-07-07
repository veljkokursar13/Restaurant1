import React from 'react'

const Title = ({ text, subtitle }) => {
  return (
    <div className='section-title'>
      <h2 className='title-text'>{text || 'our menu'}</h2>
      {subtitle && <p className='title-subtitle'>{subtitle}</p>}
      <div className='title-underline'></div>
      <div className='title-decoration'>
        <span className='decoration-dot'></span>
        <span className='decoration-line'></span>
        <span className='decoration-dot'></span>
      </div>
    </div>
  )
}

export default Title