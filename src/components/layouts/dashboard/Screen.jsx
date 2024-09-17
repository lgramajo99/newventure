import { Outlet } from "react-router-dom";

function Screen() {
    return (
        <section className="flex-1 text-center">
            <h1>Vista del componente Screen</h1>
            <Outlet />
        </section>)
}
export default Screen;