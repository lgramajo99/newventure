import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-red-300 shadow-md">
            <div className="mx-auto">
                <div className="flex justify-between items-center py-2 px-4">
                    <h3>Formulario: Search🔎</h3>
                    <h1 className="text-lg font-bold">LOL</h1>
                    <div className='hidden md:block'>
                        <span>🛒</span>
                        <span>❤</span>
                        <span>👦</span>
                    </div>

                    <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </div>
                <hr className='w-11/12 mx-auto border-red-300' />
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} text-lg py-2 px-4`}>
                    <ul className="md:flex md:flex-wrap md:justify-around list-none w-full">
                        {['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio', 'FAQ', 'Support', 'Careers', 'Terms', 'Privacy'].map((item) => (
                            <li key={item} className=" md:w-1/6 text-end md:text-center">
                                <a href="#" className="text-customGray hover:text-black">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );

}

