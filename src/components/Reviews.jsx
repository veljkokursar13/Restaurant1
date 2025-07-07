import React, { useState } from 'react'
import people from '../people'
import { MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react'

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const { name, image, text } = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

  return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <MessageCircle size={16} />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <ArrowLeft size={16} />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <ArrowRight size={16} />
                </button>
            </div>
        </article>
  )
}

export default Reviews