import { useState } from "react";

function FooterNewsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email enviado:", email);
        alert(`Correo registrado con exito:  ${email}`)
    };

    return (
        <form
            className="text-xl py-4 px-8 mx-auto text-center"
            method="post"
            onSubmit={handleSubmit}>

            <p>
                Suscríbete a nuestro boletín para inspirarte, obtener consejos y trucos y ser el primero en conocer nuevos productos y lanzamientos de colores.
            </p>
            <label
                hidden
                htmlFor="email">
                Correo electrónico
            </label>

            <input
                aria-label="Correo electrónico"
                aria-required="true"
                autoComplete="email"
                className="px-6 py-3 m-1 rounded-full text-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500"
                id="email"
                inputMode="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
                title="Correo electrónico"
                type="email"
                value={email}
            />
            <button
                aria-label="Unirse al boletín"
                className="p-3 m-1 bg-red-500 rounded-full text-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500  disabled:cursor-not-allowed"
                disabled={email === ""}
                title="Unirse al boletin"
                type="submit">
                Unirse
            </button>
        </form >
    )
}

export default FooterNewsletter;