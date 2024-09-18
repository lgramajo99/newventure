import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from '../../store/features/product/productThunk'


function CarouselCards() {
    const dispatch = useDispatch();
    const { products,} = useSelector((state) => state.product);

    useEffect(() => { dispatch(fetchProducts()) }, [dispatch])

    const carouselRef = useRef(null);
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col gap-2 shadow-lg">
            <div className="flex px-4 items-center">
                <h1 className="text-customGray">Mas recientes</h1>
                <div className="flex gap-2 ml-auto">
                    <button type="button" className="p-4 rounded-full cursor-pointer bg-red-300 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-red-400" onClick={scrollLeft}>
                        <svg
                            version="1.1"
                            id="Arrow-Left-1--Streamline-Ultimate"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="-0.5 -0.5 15 15"
                            xmlSpace="preserve"
                            enableBackground="new 0 0 24 24"
                            height="14"
                            width="14"
                        >
                            <desc>Arrow Left 1 Streamline Icon: https://streamlinehq.com</desc>
                            <path
                                d="M2.625 7c0 -0.4083333333333333 0.17500000000000002 -0.7583333333333334 0.46666666666666673 -0.9916666666666667L9.625 0.2916666666666667c0.46666666666666673 -0.4083333333333333 1.1083333333333334 -0.35000000000000003 1.5166666666666668 0.11666666666666668 0.35000000000000003 0.46666666666666673 0.35000000000000003 1.1083333333333334 -0.11666666666666668 1.4583333333333335l-5.716666666666668 5.016666666666667c-0.05833333333333334 0.05833333333333334 -0.05833333333333334 0.11666666666666668 0 0.17500000000000002l5.716666666666668 5.016666666666667c0.46666666666666673 0.4083333333333333 0.525 1.05 0.11666666666666668 1.5166666666666668s-1.05 0.525 -1.5166666666666668 0.11666666666666668l-0.05833333333333334 -0.05833333333333334 -6.4750000000000005 -5.658333333333333c-0.2916666666666667 -0.23333333333333336 -0.46666666666666673 -0.6416666666666667 -0.46666666666666673 -0.9916666666666667z"
                                fill="#000000"
                                strokeWidth="1"
                            ></path>
                        </svg>
                    </button>

                    <button type="button" className="p-4 rounded-full cursor-pointer bg-red-300 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-red-400" onClick={scrollRight}>
                        <svg
                            version="1.1"
                            id="Arrow-Right-1--Streamline-Ultimate"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 24 24"
                            xmlSpace="preserve"
                            enableBackground="new 0 0 24 24"
                            height="14"
                            width="14"
                        >
                            <desc>Arrow Right 1 Streamline Icon: https://streamlinehq.com</desc>
                            <path
                                d="M19.3446 11.9638C19.3446 12.648 19.0513 13.2345 18.5626 13.6255L7.6149 23.3024C6.8329 23.9867 5.66 23.8889 5.0735 23.1069C4.487 22.325 4.487 21.2497 5.269 20.5655L14.8482 12.1593C14.9459 12.0615 14.9459 11.9638 14.8482 11.7683L5.269 3.362C4.487 2.6778 4.487 1.5048 5.1712 0.8206C5.8555 0.1364 6.9307 0.0386 7.7127 0.6251L18.6603 10.2043C19.0513 10.6931 19.3446 11.2795 19.3446 11.9638Z"
                                fill="#000000"
                                strokeWidth="1"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <ul className="flex gap-4 list-none overflow-y-scroll scrollbar-hide" ref={carouselRef}>
                {products.map((el) => (
                    <li key={el.id}>
                        <ProductCard data={el} />
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default CarouselCards;
