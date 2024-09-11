import bannerForLg from '../../assets/images/lg/1.png';
import bannerForSm from '../../assets/images/lg/1.png';


function Banner() {

    return (
        <div className="relative w-full">
            <picture>
                <source media="(max-width: 768px)" srcSet={bannerForSm} />
                <source media="(min-width: 769px)" srcSet={bannerForLg} />
                <img
                    src={bannerForLg}
                    alt="Banner de ejemplo"
                    className="w-full h-auto object-cover"
                />
            </picture>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                    Título del Banner promocional
                </h3>
            </div>
        </div>)
}

export default Banner;