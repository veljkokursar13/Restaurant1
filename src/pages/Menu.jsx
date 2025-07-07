import React from 'react'
import data from '../data'
import {useState, useEffect} from 'react'
import AddToCart from '../components/AddToCart'
import Title from '../components/Title'
import { Minus, Plus } from 'lucide-react'

const Menu = () => {
    const [items, setItems] = useState(data)
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState('all')
    const [expandedItem, setExpandedItem] = useState(null)

    const toggleItem = (itemId) => {
        setExpandedItem(prev => {
            // If clicking the same item, close it
            if (prev === itemId) {
                return null
            }
            // Otherwise, open the new item (this automatically closes the previous one)
            return itemId
        })
    }

    const handlePageClick = (e) => {
        // If clicking outside of menu items, close any expanded item
        if (!e.target.closest('.menu-item') && expandedItem !== null) {
            setExpandedItem(null)
        }
    }

    const filterItems = (category) => {
        setActiveCategory(category)
        if (category === 'all') {
            setItems(data)
        } else {
            const newItems = data.filter((item) => item.category === category)
            setItems(newItems)
        }   
    }

    useEffect(() => {
        const categories = ['all', ...new Set(data.map((item) => item.category))]
        setCategories(categories)
    }, [])

    useEffect(() => {
        filterItems(activeCategory)
    }, [activeCategory])

    useEffect(() => {
        // Add click listener to the entire page
        document.addEventListener('click', handlePageClick)
        
        // Cleanup function
        return () => {
            document.removeEventListener('click', handlePageClick)
        }
    }, [expandedItem])

    return (  
        <section className='menu'>
            <Title text='Our Menu' />
        <div>
            {/* Category Filter Buttons */}
            <div className="btn-container">
                {categories.map((category) => {
                    return (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>

            {/* Menu Items */}
            <div className="section-center">
                {items.map((item) => {
                    const isExpanded = expandedItem === item.id
                    return (
                        <article key={item.id} className="menu-item">
                            <img src={item.img} alt={item.title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4 className="item-title">{item.title}</h4>
                                    <div className="item-actions">
                                        <AddToCart item={item} />
                                        <h4 className="price">${item.price}</h4>
                                    </div>
                                </header>
                                <div className="item-text">
                                    <button 
                                        type="button" 
                                        className={`accordion-btn ${isExpanded ? 'expanded' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleItem(item.id)
                                        }}
                                    >
                                        {isExpanded ? 'Show Less' : 'Read More'}
                                        <span className="accordion-icon">
                                            {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                                        </span>
                                    </button>
                                    <div className={`description-content ${isExpanded ? 'expanded' : ''}`}>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
        </section>
    )
}

export default Menu