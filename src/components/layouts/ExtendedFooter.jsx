import { NavLink } from "react-router-dom";

function ExtendedFooter() {

    return (<div id="accordionPanel" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 text-center text-lg">

        <details open name="atencion-al-cliente">
            <summary className="cursor-pointer">Atención al cliente</summary>
            <ul className="list-none text-base">
                <li><NavLink to={'/acerca-de'} title="Atención al cliente" aria-label="Atención al cliente">Atención al cliente</NavLink></li>
                <li><NavLink to={'#'} title="Preguntas frecuentes" aria-label="Preguntas frecuentes">Preguntas frecuentes</NavLink></li>
                <li><NavLink to={'#'} title="Envío y entrega" aria-label="Envío y entrega">Envío y entrega</NavLink></li>
                <li><NavLink to={'#'} title="Términos y condiciones de uso" aria-label="Términos y condiciones de uso">Términos y condiciones de uso</NavLink></li>
                <li><NavLink to={'#'} title="Política de privacidad" aria-label="Política de privacidad">Política de privacidad</NavLink></li>
                <li><NavLink to={'#'} title="Productos retirados del mercado" aria-label="Productos retirados del mercado">Productos retirados del mercado</NavLink></li>
                <li><NavLink to={'#'} title="Registro de productos" aria-label="Registro de productos">Registro de productos</NavLink></li>
                <li><NavLink to={'#'} title="Manuales de productos" aria-label="Manuales de productos">Manuales de productos</NavLink></li>
                <li><NavLink to={'#'} title="Escribe una reseña de producto y participa para ganar" aria-label="Escribe una reseña de producto y participa para ganar">Escribe una reseña de producto y participa para ganar</NavLink></li>
            </ul>
        </details>

        <details open name="acerca-de-venture">
            <summary className="cursor-pointer">Acerca de Venture</summary>
            <ul className="list-none text-base">
                <li><NavLink to={'#'} title="Acerca de nosotros" aria-label="Acerca de nosotros">Acerca de nosotros</NavLink></li>
                <li><NavLink to={'#'} title="Voces de expertos médicos" aria-label="Voces de expertos médicos">Voces de expertos médicos</NavLink></li>
                <li><NavLink to={'#'} title="Nuestra historia" aria-label="Nuestra historia">Nuestra historia</NavLink></li>
                <li><NavLink to={'#'} title="Sustentabilidad" aria-label="Sustentabilidad">Sustentabilidad</NavLink></li>
                <li><NavLink to={'#'} title="Prensa" aria-label="Prensa">Prensa</NavLink></li>
                <li><NavLink to={'#'} title="Oportunidades laborales" aria-label="Oportunidades laborales">Oportunidades laborales</NavLink></li>
                <li><NavLink to={'#'} title="Conviértete en afiliado" aria-label="Conviértete en afiliado">Conviértete en afiliado</NavLink></li>
            </ul>
        </details>

        <details open name="productos">
            <summary className="cursor-pointer">Productos</summary>
            <ul className="list-none text-base">
                <li><NavLink to={'#'} title="Productos" aria-label="Productos">Productos</NavLink></li>
                <li><NavLink to={'#'} title="Accesorios" aria-label="Accesorios">Accesorios</NavLink></li>
                <li><NavLink to={'#'} title="Los más vendidos" aria-label="Los más vendidos">Los más vendidos</NavLink></li>
                <li><NavLink to={'#'} title="Tarjetas de regalo" aria-label="Tarjetas de regalo">Tarjetas de regalo</NavLink></li>
                <li><NavLink to={'#'} title="Todos los productos" aria-label="Todos los productos">Todos los productos</NavLink></li>
            </ul>
        </details>

        <details open name="recursos">
            <summary className="cursor-pointer">Recursos</summary>
            <ul className="list-none text-base">
                <li><NavLink to={'#'} title="Tutoriales en video" aria-label="Tutoriales en video">Tutoriales en video</NavLink></li>
                <li><NavLink to={'#'} title="Paquetes de nuestros productos más populares" aria-label="Paquetes de nuestros productos más populares">Paquetes de nuestros productos más populares</NavLink></li>
                <li><NavLink to={'#'} title="Comparte tus momentos en Instagram" aria-label="Comparte tus momentos en Instagram">Comparte tus momentos en Instagram</NavLink></li>
            </ul>
        </details>

    </div >)
}

export default ExtendedFooter;