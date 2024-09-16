import { Link } from "react-router-dom";

function ProductCard() {
    const imagenPrueba = 'https://ik.imagekit.io/xgolcx1xy/Nike/AIR-FORCE-1-bg-remove/air-force-1-verde.png?updatedAt=1726106323001'

    return (
        <div className="block bg-white rounded-lg shadow-lg overflow-hidden max-w-[320px] text-customGray">
            <Link to={'/detalles'}>
                <img src={imagenPrueba} alt="Zapatillas air force 1 azules" className="w-[320px] h-[480px]" />
            </Link>

            <div className="grid grid-cols-2 rounded-lg px-4 py-2">
                <Link to={'/detalles'} className="col-span-1 text-gray-800 no-underline text-xl font-semibold">Nike Air Max 1</Link>
                <span className="col-span-1 text-xl text-gray-800 text-right font-semibold">$42,32</span>

                <span className="col-span-2 ">Zapatillas p/ hombre azules y blancho</span>

                <span className="col-span-1 self-center">Azul +3</span>
                <Link to={'/detalles'}
                    className="col-span-1 font-bold justify-self-end no-underline bg-red-300 border-none text-white px-4 py-2 rounded-full hover:bg-red-400"                >
                    add cart
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;