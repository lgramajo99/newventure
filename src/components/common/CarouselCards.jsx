import { useState } from "react";

function CarouselCards() {
    const [countIndex, setCountIndex] = useState(0)

    const nextSlides = () => { setCountIndex(countIndex + 1) };
    const prevSlides = () => { setCountIndex(countIndex - 1) };

    return (<div className="bg-slate-300 w-full  relative overflow-hidden">
        <button type="button" className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg" onClick={prevSlides}>&lt;</button>
        <h1 className="text-center">cantidad de card: {countIndex}</h1>
        <button type="button" className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg" onClick={nextSlides}> &gt;</button>

    </div>)
}

export default CarouselCards;