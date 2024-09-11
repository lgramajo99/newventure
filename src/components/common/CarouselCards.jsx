import { useState } from "react";

function CarouselCards() {
    const [countIndex, setCountIndex] = useState(0)

    const nextSlides = () => { setCountIndex(countIndex + 1) };
    const prevSlides = () => { setCountIndex(countIndex - 1) };

    return (<div>
        <h1>Mas vendidos</h1>

        <h1>cantidad de card: {countIndex}</h1>
        <button type="button" onClick={prevSlides}>anterior</button>
        <button type="button" onClick={nextSlides}>siguiente</button>

    </div>)
}

export default CarouselCards;