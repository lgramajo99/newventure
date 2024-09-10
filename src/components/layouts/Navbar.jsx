import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-red-300 shadow-lg border-red-400">
            <div className="mx-auto">
                <div className="flex justify-between items-center py-2 px-4">
                    <span className='hidden md:block'>Formulario: Search🔎</span>
                    <span className='md:hidden'></span>

                    <h1 className="text-lg font-bold">LOL</h1>

                    <div className='hidden md:block space-x-4'>
                        <Link to={'#'} className='no-underline'>🛒</Link >
                        <Link to={'#'} className='no-underline'>❤</Link >
                        <Link to={'#'} className='no-underline'>👦</Link >
                    </div>

                    <button
                        className="md:hidden flex items-center justify-center p-1 rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>


                </div>
                <hr className='w-11/12 mx-auto border-red-300' />
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} text-lg py-2 px-4`}>
                    <ul className="md:flex md:flex-wrap md:justify-around list-none w-full">
                        {['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio', 'FAQ', 'Support', 'Careers', 'Terms', 'Privacy'].map((item) => (
                            <li key={item} className=" md:w-1/6 text-end md:text-center">
                                <Link to="#" className="no-underline text-customGray hover:text-black">{item}</Link>
                            </li>
                        ))}
                        <span className='md:hidden text-end'>Formulario: Search🔎</span>

                    </ul>
                </div>
            </div>
        </nav >
    );

}

