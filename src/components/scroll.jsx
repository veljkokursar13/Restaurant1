import { useEffect, useState } from 'react'

const Scroll = () => {
    const [scrollDown, setScrollDown] = useState(false)
    const [scrollUp, setScrollUp] = useState(false)

   useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY
        setScrollDown(scrollPosition > 100)
        setScrollUp(scrollPosition < 100)
    }
   }, [])

    return (
      
    )
}

export default Scroll