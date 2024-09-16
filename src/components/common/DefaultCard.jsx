import { Link } from "react-router-dom";

function DefaultCard() {
    return (<article className="overflow-hidden text-customGray">
        <Link to={"/details"} aria-label="Ver detalles de " className="overflow-hidden" title="Titulo producto">
            <img src="https://ik.imagekit.io/xgolcx1xy/Nike/AIR-FORCE-1-bg-remove/air-force-1-verde.png?updatedAt=1726106323001"
                className="w-full h-auto max-h-48 object-cover "
                alt="AIR Force 1 verde" />
        </Link>

        <footer className="grid grid-cols-2 px-4 py-2">

            <h2 className="col-span-1 text-lg">
                <Link to={"/details"}
                    aria-label="Ver detalles de "
                    className="no-underline truncate  text-gray-800"
                    title="Titulo producto">Titulo producto</Link></h2>
            <p className="col-span-1 text-base font-bold text-right text-gray-800">$33,99</p>

            <p className="col-span-2 text-base truncate"
                title="Descripcion breve del producto y como los detalles, accesorios y diseños especificos">Descripcion breve del producto y como los detalles, accesorios y diseños especificos</p>
            <p className="col-span-1 self-center">Colores +X</p>
            <Link to={'/detalles'}
                className="col-span-1 font-bold justify-self-end no-underline bg-red-300 border-none text-white px-4 py-2 rounded-full hover:bg-red-400"                >
                add to cart
            </Link>
        </footer>


    </article>)
}

export default DefaultCard;