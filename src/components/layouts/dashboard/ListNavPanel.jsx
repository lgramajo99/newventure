
import { Link } from "react-router-dom";

function ListNavPanel() {
    return (
        <details>
            <summary className={`cursor-pointer font-bold list-none text-lg rounded-full transition duration-300 ease-in-out transform border-none flex justify-between py-2 px-4 bg-red-200 truncate hover:bg-red-300 hover:shadow-md`}
                title="Usuarios">
                Usuarios
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 25 25"
                    id="User-Circle-Single--Streamline-Core"
                    height={25}
                    width={25} >
                    <desc>{"User Circle Single Streamline Icon: https://streamlinehq.com"}</desc>
                    <g id="user-circle-single--circle-geometric-human-person-single-user">
                        <path id="Union"
                            fill="#000000"
                            fillRule="evenodd"
                            d="M25 12.5c0 3.3515535714285716 -1.319107142857143 6.3950000000000005 -3.46625 8.639642857142857 -2.267857142857143 2.3705357142857144 -5.4592857142857145 3.8500000000000005 -8.99644642857143 3.860357142857143L12.5 25l-0.03730357142857143 0c-3.537160714285714 -0.010357142857142856 -6.728660714285715 -1.4898214285714286 -8.996392857142858 -3.860357142857143C1.3190339285714285 18.895000000000003 0 15.851553571428573 0 12.5c0 -6.903553571428572 5.596446428571428 -12.5 12.5 -12.5 6.903571428571429 0 12.5 5.596446428571428 12.5 12.5Zm-4.923571428571429 6.25C18.275178571428572 16.56869642857143 15.54989285714286 15.178517857142857 12.5 15.178517857142857c-3.0498928571428574 0 -5.775107142857143 1.3901785714285715 -7.576517857142857 3.5714821428571435 1.8014107142857145 2.1812500000000004 4.526625 3.5714285714285716 7.576517857142857 3.5714285714285716 3.0498928571428574 0 5.775178571428572 -1.3901785714285715 7.576428571428572 -3.5714285714285716ZM12.500214285714286 13.392803571428573c2.465553571428572 0 4.464285714285714 -1.9987321428571427 4.464285714285714 -4.464285714285714s-1.9987321428571427 -4.464285714285714 -4.464285714285714 -4.464285714285714 -4.464285714285714 1.9987321428571427 -4.464285714285714 4.464285714285714 1.9987321428571427 4.464285714285714 4.464285714285714 4.464285714285714Z"
                            clipRule="evenodd"
                            strokeWidth={1} />
                    </g>
                </svg>
            </summary>

            <ul className="flex flex-col gap-2 truncate">
                <li><Link to={'/dashboard/#'} className="py-2 px-4 no-underline rounded-full font-bold text-gray-800">Mi perfil</Link></li>
                <li><Link to={'/dashboard/#'} className="py-2 px-4 no-underline rounded-full font-bold text-gray-800">Administrador de usuarios</Link></li>
                <li><Link to={'/dashboard/#'} className="py-2 px-4 no-underline rounded-full font-bold text-gray-800">Preferencia de usuario</Link></li>
            </ul>
        </details>)
}

export default ListNavPanel;