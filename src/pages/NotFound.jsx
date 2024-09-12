import { Link, useNavigate } from 'react-router-dom';
import robotNotFound from '../assets/images/notfound/2_disoriented_robot_sticker_style_head_404-removebg-preview.png'

function NotFound() {
    const navigate = useNavigate()

    return (<section className='flex flex-col gap-4 text-center items-center p-4'>
        <h1 className='text-4xl font-bold'>Error 404</h1>
        <h2 className='text-2xl'>¡Ups! Parece que esta página ha desaparecido.</h2>
        <img src={robotNotFound} className='w-80' alt="Robot sticker not found 404" />

        <p className='text-lg'>¿No encuentras lo que buscas? Prueba nuestra barra de búsqueda arriba.</p>

        <div className='flex space-x-4'>
            <button type='button' onClick={() => navigate(-1)} className='cursor-pointer border-none px-4 py-2 bg-red-300 font-bold rounded-lg hover:bg-red-400 transition duration-300'>Volver atras</button>
            <Link to='/' className='no-underline text-black px-4 py-2 bg-red-300 font-bold rounded-lg hover:bg-red-400 transition duration-300'>Volver al inicio</Link>
        </div>

    </section>)
}

export default NotFound;