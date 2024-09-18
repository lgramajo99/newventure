import { useState } from "react";

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = () => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = () => {
        event.preventDefault();
        console.log('Buscar:', searchTerm);

        // Borra lo que se escribio al buscar. 
        setSearchTerm("")
    }

    return (
        <form onSubmit={handleSubmit} action=""
            className="border-custom-red-form border-red-300 inline-flex items-center rounded-full overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-red-500">

            <input className="px-4 py-1 border-none bg-transparent text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Buscar..."
                name="text"
                id="text" />

            <button className="px-4 py-1 border-none bg-transparent text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 cursor-pointer"
                type="submit">
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    id="Magnifying-Glass--Streamline-Core"
                    height={16}
                    width={16} >
                    <desc>{"Magnifying Glass Streamline Icon: https://streamlinehq.com"}</desc>
                    <g id="magnifying-glass--glass-search-magnifying">
                        <path id="Union"
                            fill="#000000"
                            fillRule="evenodd"
                            d="M2.2857142857142856 6.857142857142857a4.571428571428571 4.571428571428571 0 1 1 9.142857142857142 0 4.571428571428571 4.571428571428571 0 0 1 -9.142857142857142 0Zm4.571428571428571 -6.857142857142857a6.857142857142857 6.857142857142857 0 1 0 3.9725714285714284 12.445714285714285l3.2194285714285713 3.2194285714285713a1.1428571428571428 1.1428571428571428 0 0 0 1.6159999999999999 -1.6159999999999999l-3.218285714285714 -3.218285714285714A6.857142857142857 6.857142857142857 0 0 0 6.857142857142857 0Z"
                            clipRule="evenodd"
                            strokeWidth={1} />
                    </g>
                </svg>
            </button>
        </form>
    )
}

export default SearchForm;