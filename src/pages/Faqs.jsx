function Faqs() {
    return (
        <section id="faqs" className="mx-auto w-full max-w-container px-4">

            <div className="mx-auto grid lg:grid-cols-12 gap-y-16">

                <div className="lg:col-span-4">
                    <h2 className="text-base font-semibold">Frequently asked questions</h2>
                    <p className="mt-4 text-4xl font-extrabold">Everything you need to know</p>
                </div>

                <div className="lg:col-span-8">

                    <section>
                        <h3 className="text-sm text-customGray font-semibold">General</h3>

                        <dl className="mt-2 divide-y divide-slate-100">
                            <details className="group py-4">
                                <summary className="flex justify-between cursor-pointer font-semibold group-open:text-red-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas.?
                                    <svg className="ml-4 h-6 w-6 stroke-slate-700 group-open:stroke-red-500"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12" />
                                    </svg>
                                </summary>

                                <div className="pt-6">
                                    <p className="text-customGray">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti accusamus sint aut alias magnam.
                                    </p>
                                </div>
                            </details>

                            <details className="group py-4">
                                <summary className="flex justify-between cursor-pointer font-semibold group-open:text-red-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sit.?
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
                                <div className="pt-6">
                                    <p className="text-customGray">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae dolores tempora cumque fugit.
                                    </p>
                                </div>
                            </details>
                        </dl>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Faqs;
