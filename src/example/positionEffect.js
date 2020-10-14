import {
    useState,
    useEffect
} from 'react'

export default function useBodyScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handScroll = () => {
            setScrollPosition(window.scrollY)
        }
        
        document.addEventListener('scroll', handScroll)

        return () => {
            document.removeEventListener('scroll', handScroll)
        }
    }, [])

    return scrollPosition
}