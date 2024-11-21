import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    const getLinkClass = (path: string) => {
        return location.pathname === path ? 'font-bold' : 'font-normal'
    }

    return (
        <nav className="px-4 bg-blue-600 h-14 fixed w-full flex justify-between items-center">
            <div className="md:hidden"></div>

            {/* Web Navbar */}
            <div className="hidden md:flex items-center gap-x-4 w-full justify-center text-white">
                <Link to="/" className={getLinkClass('/')}>
                    Home
                </Link>
                <Link to="/about" className={getLinkClass('/about')}>
                    About
                </Link>
            </div>

            {/* Hamburger & Mobile Navbar */}
            <button className="block md:hidden text-2xl p-2 text-white" onClick={toggleMenu}>
                <FaBars />
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-0 z-50 flex flex-col items-center justify-center left-0 w-full h-screen bg-blue-100 bg-opacity-50 backdrop-blur-md p-4`}>
                <button className="absolute top-4 right-4 text-2xl" onClick={closeMenu}>
                    <FaTimes />
                </button>
                <div className="flex flex-col items-center">
                    <Link to="/" className={`${getLinkClass('/')}`} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className={`${getLinkClass('/about')}`} onClick={closeMenu}>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
