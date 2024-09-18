import { Link } from "react-router-dom";

function DefaultCard({ data }) {
    const { id, imagen, descripcion, nombre, precio } = data;

    return (<article className="overflow-hidden text-customGray">
        <header>
            <Link to={`/details/${id}`}
                aria-label="Ver detalles de "
                className="overflow-hidden">

                <img src={imagen}
                    className="w-full h-auto max-h-48 object-cover "
                    alt={nombre} />
            </Link>
        </header>

        <footer className="grid grid-cols-2 px-4 py-2">
            <h2 className="col-span-1 text-lg">
                <Link to={`/details/${id}`}
                    aria-label="Ver detalles de "
                    className="no-underline truncate  text-gray-800"
                    title={nombre}>
                    {nombre}
                </Link>
            </h2>

            <p className="col-span-1 text-base font-bold text-right text-gray-800">
                {precio}
            </p>

            <p className="col-span-2 text-base truncate"
                title="Descripcion breve del producto y como los detalles, accesorios y diseños especificos">
                {descripcion}
            </p>

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
            <Link to={`/details/${id}`}
                className="col-span-1 font-bold justify-self-end no-underline bg-red-300 border-none text-white px-4 py-2 rounded-full hover:bg-red-400"                >
                add to cart
            </Link>
        </footer>


    </article>)
}

export default DefaultCard;