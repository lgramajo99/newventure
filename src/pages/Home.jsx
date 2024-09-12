import React from 'react'
import Banner from '../components/common/Banner';
import CarouselCards from '../components/common/CarouselCards';


function Home() {
    return (
        <div className='flex flex-col gap-4 pb-4'>
            <Banner />
            <CarouselCards />
        </div>)
}

export default Home;