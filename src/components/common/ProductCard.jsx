import { Link } from "react-router-dom";

function ProductCard({ data }) {

    const { id, imagen, descripcion, nombre, precio, colores } = data;

    return (
        <article className="block bg-white rounded-lg shadow-lg overflow-hidden min-w-[320px] text-customGray">
            <header className="w-[320px] h-[480px]">
                <Link to={`/details/${id}`}  >
                    <img src={imagen} alt="Zapatillas air force 1 azules" className="w-[320px] h-[480px] " />
                </Link>
            </header>

            <footer className="grid grid-cols-2 rounded-lg px-4 py-2 gap-y-1">
                <Link to={`/details/${id}`}
                    title={nombre}
                    className="col-span-1 text-gray-800 no-underline text-xl font-semibold truncate whitespace-nowrap overflow-hidden text-ellipsis">{nombre}</Link>

                <span className="col-span-1 text-xl text-gray-800 text-right font-semibold">{precio}</span>

                <span className="col-span-2 truncate whitespace-nowrap overflow-hidden text-ellipsis">
                    {descripcion}
                </span>

                <span className="col-span-1 self-center font-bold truncate whitespace-nowrap overflow-hidden text-ellipsis">
                    {colores.disponibles.slice(0, 3).map((color, index) => (
                        <svg key={index} title={color.nombre} xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            height={20} width={20}>
                            <desc>{"Circle Streamline Icon: https://streamlinehq.com"}</desc>
                            <g>
                                <path
                                    fill={color.hex}
                                    d="M0 10a10 10 0 1 0 20 0A10 10 0 1 0 0 10"
                                    strokeWidth={1} />
                            </g>
                        </svg>
                    ))}
                    {colores.disponibles.length > 3 && ` +${colores.disponibles.length - 3}`}
                </span>

                <Link to={`/details/${id} `}
                    className="col-span-1 font-bold justify-self-end no-underline bg-red-300 border-none text-white px-4 py-2 rounded-full hover:bg-red-400"                >
                    add cart
                </Link>
            </footer>
        </article>
    )
}

export default ProductCard;