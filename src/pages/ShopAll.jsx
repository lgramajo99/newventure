import Pagination from "../components/common/Pagination";
import ProductCard from "../components/common/ProductCard";
import DefaultCard from "../components/common/DefaultCard";

function ShopAll() {
    return (<section className="p-4">
        <h1 className="text-center my-2">Catalogo de productos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
            {/* Filtros - 2/12 en lg, arriba en sm */}
            <div className="lg:col-span-2 lg:self-start">
                <details>
                    <summary className="cursor-pointer">Filtros UX</summary>
                    <ul className="list-none">
                        <li><button className="border-none bg-transparent cursor-pointer py-1 my-1" type="button">Más recientes</button></li>
                        <li><button className="border-none bg-transparent cursor-pointer py-1 my-1" type="button">Más populares</button></li>
                        <li><button className="border-none bg-transparent cursor-pointer py-1 my-1" type="button">Precio: bajo a alto</button></li>
                        <li><button className="border-none bg-transparent cursor-pointer py-1 my-1" type="button">Precio: alto a bajo</button></li>
                    </ul>
                </details>
            </div>

            {/* Cards de productos - 10/12 en lg */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:col-span-10">
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
                <DefaultCard />
            </div>
        </div>

        <Pagination />
    </section>)
}

export default ShopAll;