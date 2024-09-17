import { Link } from "react-router-dom";

function TopBar() {
    return (<div className="flex justify-between py-1 px-4 text-customGray">
        <div id="advertisement" className="overflow-hidden whitespace-nowrap">
            <p className="inline-block animate-scroll">
                <span>
                    <svg
                        preserveAspectRatio="xMidYMid"
                        className="Icon-module--icon--b3d78 InformationSlide-module--icon--c4f46"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        style={{ width: "1.2rem" }}>
                        <path
                            d="M20.0002 18H21.0002C22.1048 18 23.0002 17.1046 23.0002 16V11.701C23.0002 11.247 22.8462 10.807 22.5622 10.452L20.2012 7.501C19.4412 6.553 18.2932 6 17.0772 6H15.0002V5C15.0002 3.896 14.1042 3 13.0002 3H3.00024"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0004 17.9999C10.0004 19.657 8.65735 21 7.00031 21C5.34327 21 4.00024 19.657 4.00024 17.9999C4.00024 16.3429 5.34327 14.9999 7.00031 14.9999C8.65735 14.9999 10.0004 16.3429 10.0004 17.9999Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.1511 19C20.1511 20.1047 19.2558 21 18.1511 21C17.0465 21 16.1511 20.1047 16.1511 19C16.1511 17.8953 17.0465 17 18.1511 17C19.2558 17 20.1511 17.8953 20.1511 19Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22.288 11L17.0002 11C15.8956 11 15.0002 10.1045 15.0002 8.99997L15.0002 5.44472"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.70253 10.7999L10.5024 9L8.70253 7.20009"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.70253 10.7999L5.50244 9L3.70253 7.20009"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line x1="16.814" y1="18" x2="10.3049" y2="18" strokeWidth="1.5" />
                    </svg>
                </span>
                Envío gratuito en todos los pedidos.
            </p>
        </div>
        <div className="space-x-4 hidden md:block">
            <Link to={"#"} className="text-customGray">Centro de ayuda</Link>
            <Link to={"#"} className="text-customGray">Localizador de tiendas</Link>
        </div>

    </div>)
}

export default TopBar;


<section class="InformationSlideShow-module--slideshow--10484">
    <div style="transform: none; opacity: 1;">
        <div class="InformationSlide-module--slide--a57f9"><span class="InformationSlide-module--info--aab34">
            <svg preserveAspectRatio="xMidYMid" class="Icon-module--icon--b3d78 InformationSlide-module--icon--c4f46" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width: 1.5rem;">
                <path d="M20.0002 18H21.0002C22.1048 18 23.0002 17.1046 23.0002 16V11.701C23.0002 11.247 22.8462 10.807 22.5622 10.452L20.2012 7.501C19.4412 6.553 18.2932 6 17.0772 6H15.0002V5C15.0002 3.896 14.1042 3 13.0002 3H3.00024" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0004 17.9999C10.0004 19.657 8.65735 21 7.00031 21C5.34327 21 4.00024 19.657 4.00024 17.9999C4.00024 16.3429 5.34327 14.9999 7.00031 14.9999C8.65735 14.9999 10.0004 16.3429 10.0004 17.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1511 19C20.1511 20.1047 19.2558 21 18.1511 21C17.0465 21 16.1511 20.1047 16.1511 19C16.1511 17.8953 17.0465 17 18.1511 17C19.2558 17 20.1511 17.8953 20.1511 19Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M22.288 11L17.0002 11C15.8956 11 15.0002 10.1045 15.0002 8.99997L15.0002 5.44472" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8.70253 10.7999L10.5024 9L8.70253 7.20009" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3.70253 10.7999L5.50244 9L3.70253 7.20009" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <line x1="16.814" y1="18" x2="10.3049" y2="18" stroke-width="1.5"></line></svg>
            <p class="InformationSlide-module--infoText--5a105">Free ground shipping on all orders</p></span></div></div></section>