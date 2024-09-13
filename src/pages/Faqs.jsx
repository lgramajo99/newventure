function Faqs() {
    return (
        <section className="mx-auto w-full max-w-7xl">
            <div className="mx-auto p-4 grid gap-y-12 lg:grid-cols-12">

                <div className="lg:col-span-4">
                    <h2 className="text-base font-semibold text-red-500">Preguntas frecuentes</h2>
                    <p className="text-3xl font-extrabold text-slate-900 ">
                        Todo lo que necesitas saber!!!
                    </p>
                </div>

                <div className="lg:col-span-8">
                    {/* Seccion de preguntas Generales */}
                    <section>
                        <h3 className="text-sm font-semibold text-gray-500">General</h3>

                        <dl className="space-y-4">
                            <details className="group">
                                <summary className="flex justify-between cursor-pointer font-semibold text-slate-900 group-open:text-red-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut.?
                                    <svg className="ml-4 h-6 w-6 stroke-slate-700 group-open:stroke-red-500"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M18 12H6" />
                                        <path className="group-open:hidden" d="M12 6v12" />
                                    </svg>
                                </summary>
                                <div className=" text-gray-600">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, harum ipsum ab nisi minima eos pariatur deserunt, accusantium necessitatibus quam reiciendis corporis! Saepe nemo molestias, tenetur incidunt nisi mollitia quidem quasi est nulla unde velit molestiae sequi sed quod placeat aspernatur iste pariatur magni animi!</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="flex justify-between cursor-pointer font-semibold group-open:text-red-600">
                                    Lorem ipsum dolor sit amet consectetur?
                                    <svg className="ml-4 h-6 w-6 stroke-slate-700 group-open:stroke-red-500"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M18 12H6" />
                                        <path className="group-open:hidden" d="M12 6v12" />
                                    </svg>
                                </summary>
                                <div className="text-gray-600">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi harum mollitia itaque odio fugit, dolorum ex non et beatae vel dignissimos, temporibus fuga ipsam atque nemo nobis, necessitatibus nihil ea! Reiciendis mollitia itaque quas quidem eaque perferendis eius aliquid nisi ea, dicta et sint enim veniam! Incidunt deserunt quisquam excepturi, assumenda possimus vitae.</p>
                                </div>
                            </details>
                        </dl>
                    </section>
                    {/* Aqui abajo iria otra seccion de preguntas */}

                </div>
            </div>
        </section >
    );
}

export default Faqs;
